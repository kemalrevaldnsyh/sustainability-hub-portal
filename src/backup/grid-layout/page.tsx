import { DashboardGrid } from "@/components/dashboard/DashboardGrid";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
        <img
          src="/portal-background.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/50 to-white/55" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <DashboardGrid />
        </main>
      </div>
    </div>
  );
}
