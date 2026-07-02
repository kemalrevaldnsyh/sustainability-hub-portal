import { AppCard } from "@/components/dashboard/AppCard";
import { apps } from "@/data/apps";

export function DashboardGrid() {
  const activeApps = apps.filter((app) => app.status === "active");

  return (
    <div className="space-y-10">
      <section className="border-b border-slate-200 pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
          KPN Downstream Sustainability
        </p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Sustainability Hub Portal
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600">
          Central access point for connected sustainability applications. Active
          modules open in a new browser tab.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {activeApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>
    </div>
  );
}
