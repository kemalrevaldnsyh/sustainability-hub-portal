import {
  Award,
  BarChart3,
  Calculator,
  ClipboardCheck,
  FileSearch,
  GitBranch,
  Leaf,
} from "lucide-react";

import type { AppCardData } from "@/types/app";

export const apps: AppCardData[] = [
  {
    id: "sustainability-dashboard",
    title: "Sustainability Dashboard",
    description:
      "Central system for managing supplier due diligence, grievance mechanisms, and mill onboarding.",
    href: "https://sustainability-dws-psi.vercel.app/",
    status: "active",
    icon: Leaf,
  },
  {
    id: "ghg-calculator",
    title: "GHG Calculator",
    description:
      "Greenhouse Gas savings calculator for KPN Downstream Sustainability division.",
    href: "https://ghg-calculator-six.vercel.app/",
    status: "active",
    icon: Calculator,
  },
  {
    id: "supplier-assessment",
    title: "Supplier Assessment",
    description:
      "Evaluate supplier sustainability performance, risk profiles, and compliance readiness.",
    status: "coming-soon",
    icon: ClipboardCheck,
  },
  {
    id: "traceability-matrix",
    title: "Traceability Matrix",
    description:
      "Map supply chain flows and verify origin-to-destination traceability across operations.",
    status: "coming-soon",
    icon: GitBranch,
  },
  {
    id: "certification-readiness",
    title: "Certification Readiness",
    description:
      "Track certification requirements and prepare for RSPO, ISCC, and other standards.",
    status: "coming-soon",
    icon: Award,
  },
  {
    id: "audit-tracker",
    title: "Audit Tracker",
    description:
      "Schedule, monitor, and document internal and external sustainability audits.",
    status: "coming-soon",
    icon: FileSearch,
  },
  {
    id: "esg-reporting",
    title: "ESG Reporting",
    description:
      "Consolidate ESG metrics and generate stakeholder-ready sustainability reports.",
    status: "coming-soon",
    icon: BarChart3,
  },
];
