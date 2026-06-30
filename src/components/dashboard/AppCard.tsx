import { ArrowUpRight, Lock } from "lucide-react";

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
        className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg hover:shadow-red-500/10"
      >
        <AppCardContent app={app} Icon={Icon} isActive />
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-700 transition group-hover:gap-3">
          Open application
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </a>
    );
  }

  return (
    <div
      aria-disabled="true"
      className="relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 opacity-70 shadow-sm"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-slate-50/40 backdrop-blur-[1px]" />
      <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-400">
        <Lock className="h-4 w-4" />
      </div>
      <AppCardContent app={app} Icon={Icon} isActive={false} />
      <span className="mt-6 inline-flex cursor-not-allowed items-center gap-2 text-sm font-medium text-slate-400">
        Unavailable
      </span>
    </div>
  );
}

interface AppCardContentProps {
  app: AppCardData;
  Icon: AppCardData["icon"];
  isActive: boolean;
}

function AppCardContent({ app, Icon, isActive }: AppCardContentProps) {
  return (
    <>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            isActive
              ? "bg-red-100 text-red-700"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <StatusBadge status={app.status} />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {isActive ? app.title : "Coming Soon"}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {app.description}
      </p>
    </>
  );
}

function StatusBadge({ status }: { status: AppCardData["status"] }) {
  if (status === "active") {
    return (
      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
        Active
      </span>
    );
  }

  return (
    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
      Coming Soon
    </span>
  );
}
