"use client";

import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";

const ERROR_MESSAGES: Record<string, string> = {
  missing_code: "This sign-in link is invalid or has expired.",
  auth_callback_failed: "Sign-in could not be completed. Please try again.",
  invalid_credentials: "Incorrect email or password.",
};

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") ?? "/";
  const queryError = searchParams.get("error");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(
    queryError
      ? queryError === "auth_not_configured"
        ? null
        : (ERROR_MESSAGES[queryError] ?? "Something went wrong while signing in.")
      : null,
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (!isSupabaseConfigured()) {
        setError("Sign-in is not available yet. Please try again later.");
        return;
      }

      const supabase = createClient();

      if (!supabase) {
        setError("Sign-in is not available yet. Please try again later.");
        return;
      }

      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (signInError) {
        setError(
          signInError.message.toLowerCase().includes("invalid")
            ? ERROR_MESSAGES.invalid_credentials
            : signInError.message,
        );
        return;
      }

      router.push(nextPath);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-panel">
      <div className="login-panel-header">
        <h1 className="login-title">Sign in</h1>
        <p className="login-subtitle">
          Enter your credentials to access active sustainability modules.
        </p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-field">
          <span className="login-label">Email</span>
          <span className="login-input-wrap">
            <Mail className="login-input-icon" strokeWidth={1.75} />
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@kpn.co.id"
              className="login-input"
            />
          </span>
        </label>

        <label className="login-field">
          <span className="login-label">Password</span>
          <span className="login-input-wrap">
            <LockKeyhole className="login-input-icon" strokeWidth={1.75} />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="login-input login-input-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="login-password-toggle"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </span>
        </label>

        {error && (
          <p className="login-error" role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={isLoading} className="login-submit">
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </button>
      </form>

      <p className="login-footer">
        Authorized access only. Contact your administrator for account support.
      </p>
    </div>
  );
}
