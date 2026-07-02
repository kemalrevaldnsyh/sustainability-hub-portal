import { SustainabilityLogo } from "@/components/brand/SustainabilityLogo";

export function LoginHero() {
  return (
    <section className="login-hero" aria-label="Sustainability Hub">
      <div className="login-hero-media" aria-hidden>
        <img
          src="/portal-background.jpg"
          alt=""
          className="login-hero-image"
        />
        <div className="login-hero-overlay" />
        <div className="login-hero-grain" />
      </div>

      <div className="login-hero-content">
        <div className="login-hero-brand">
          <SustainabilityLogo size={36} className="login-hero-logo shrink-0 sm:hidden" />
          <SustainabilityLogo size={44} className="login-hero-logo hidden shrink-0 sm:block" />
          <div className="min-w-0">
            <p className="login-hero-kicker">KPN Downstream Sustainability</p>
            <h2 className="login-hero-heading">Sustainability Hub Portal</h2>
          </div>
        </div>

        <p className="login-hero-lead">
          One secure entry point for sustainability operations — from supplier
          due diligence and emissions tracking to supplier performance
          monitoring.
        </p>
      </div>
    </section>
  );
}
