import type { Metadata } from "next";
import { Suspense } from "react";

import { LoginForm } from "@/components/auth/LoginForm";
import { LoginHero } from "@/components/auth/LoginHero";

export const metadata: Metadata = {
  title: "Sign In | Sustainability Hub Portal",
  description: "Secure sign in to the KPN Sustainability Hub Portal.",
};

export default function LoginPage() {
  return (
    <div className="login-page overflow-x-hidden">
      <LoginHero />

      <section className="login-form-section">
        <Suspense fallback={<div className="login-panel login-panel-loading" />}>
          <LoginForm />
        </Suspense>
      </section>
    </div>
  );
}
