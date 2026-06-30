import { DashboardGrid } from "@/components/dashboard/DashboardGrid";
import { Navbar } from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DashboardGrid />
      </main>
    </div>
  );
}
