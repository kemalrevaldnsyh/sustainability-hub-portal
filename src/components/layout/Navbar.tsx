import { SustainabilityLogo } from "@/components/brand/SustainabilityLogo";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { createClient } from "@/lib/supabase/server";

export async function Navbar() {
  const supabase = await createClient();
  const user = supabase ? (await supabase.auth.getUser()).data.user : null;

  return (
    <header className="sticky top-0 z-40 border-b border-white/50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
          <SustainabilityLogo size={28} className="shrink-0 sm:hidden" />
          <SustainabilityLogo size={32} className="hidden shrink-0 sm:block" />
          <div className="min-w-0 border-l border-slate-200 pl-2.5 sm:pl-3">
            <p className="truncate text-sm font-semibold tracking-tight text-slate-900">
              Sustainability Hub
            </p>
            <p className="hidden text-[11px] uppercase tracking-wide text-slate-500 sm:block">
              Portal
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <SignOutButton email={user?.email} />
        </div>
      </div>
    </header>
  );
}
