"use client";

import { Loader2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { createClient } from "@/lib/supabase/client";

interface SignOutButtonProps {
  email?: string | null;
}

export function SignOutButton({ email }: SignOutButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSignOut() {
    setIsLoading(true);

    try {
      const supabase = createClient();

      if (supabase) {
        await supabase.auth.signOut();
      }

      await fetch("/auth/signout", { method: "POST" });
      router.push("/login");
      router.refresh();
    } catch {
      router.push("/login");
      router.refresh();
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex shrink-0 items-center gap-2 sm:gap-3">
      {email && (
        <span className="hidden max-w-[200px] truncate text-xs text-slate-500 md:inline">
          {email}
        </span>
      )}
      <button
        type="button"
        onClick={handleSignOut}
        disabled={isLoading}
        aria-label="Sign out"
        className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-[#C04A3E]/30 hover:bg-white hover:text-[#9A3B32] disabled:cursor-wait disabled:opacity-70 sm:min-w-0 sm:px-3"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <LogOut className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">Sign out</span>
      </button>
    </div>
  );
}
