import type { LucideIcon } from "lucide-react";

export type AppStatus = "active" | "coming-soon";

export interface AppCardData {
  id: string;
  title: string;
  description: string;
  href?: string;
  status: AppStatus;
  icon: LucideIcon;
}
