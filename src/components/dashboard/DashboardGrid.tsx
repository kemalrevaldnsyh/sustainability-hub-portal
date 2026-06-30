import { AppCard } from "@/components/dashboard/AppCard";
import { apps } from "@/data/apps";

export function DashboardGrid() {
  const activeCount = apps.filter((app) => app.status === "active").length;
  const comingSoonCount = apps.filter(
    (app) => app.status === "coming-soon",
  ).length;

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Sustainability Hub Portal
        </h1>
        <p className="max-w-2xl text-base text-slate-600">
          Launch connected sustainability tools from one central dashboard.
          Active applications open in a new tab; upcoming modules are currently
          in development.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Total Applications", value: apps.length },
          { label: "Active", value: activeCount },
          { label: "Coming Soon", value: comingSoonCount },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm"
          >
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
