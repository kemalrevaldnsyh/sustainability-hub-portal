import { ArrowUpRight } from "lucide-react";

import type { AppCardData } from "@/types/app";

interface AppCardProps {
  app: AppCardData;
}

export function AppCard({ app }: AppCardProps) {
  const Icon = app.icon;
  const isActive = app.status === "active";

  if (isActive && app.href) {
    return (
      <a
        href={app.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex min-h-[220px] flex-col rounded-xl border border-white/90 bg-white shadow-md transition hover:border-slate-200 hover:shadow-lg"
      >
        <div className="flex flex-1 flex-col p-7">
          <AppCardHeader app={app} Icon={Icon} isActive />
          <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">
            {app.description}
          </p>
        </div>
        <div className="border-t border-slate-100 px-7 py-4">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition group-hover:text-[#9A3B32]">
            Launch application
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </a>
    );
  }

  return (
    <div
      aria-disabled="true"
      className="flex min-h-[220px] flex-col rounded-xl border border-white/70 bg-white/80 shadow-sm backdrop-blur-sm"
    >
      <div className="flex flex-1 flex-col p-7">
        <AppCardHeader app={app} Icon={Icon} isActive={false} />
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-500">
          {app.description}
        </p>
      </div>
      <div className="border-t border-slate-200/80 px-7 py-4">
        <span className="text-sm font-medium text-slate-400">
          Not yet available
        </span>
      </div>
    </div>
  );
}

interface AppCardHeaderProps {
  app: AppCardData;
  Icon: AppCardData["icon"];
  isActive: boolean;
}

function AppCardHeader({ app, Icon, isActive }: AppCardHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <div
          className={`mb-4 flex h-11 w-11 items-center justify-center rounded-lg border ${
            isActive
              ? "border-slate-200 bg-slate-50 text-slate-600"
              : "border-slate-200/80 bg-white/60 text-slate-400"
          }`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h3
          className={`text-lg font-semibold tracking-tight ${
            isActive ? "text-slate-900" : "text-slate-600"
          }`}
        >
          {app.title}
        </h3>
      </div>
      <StatusIndicator status={app.status} />
    </div>
  );
}

function StatusIndicator({ status }: { status: AppCardData["status"] }) {
  if (status === "active") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-500">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
        Active
      </span>
    );
  }

  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">
      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
      Planned
    </span>
  );
}
