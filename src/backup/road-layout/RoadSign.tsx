"use client";

import type { AppCardData } from "@/types/app";

interface RoadSignProps {
  app: AppCardData;
  step: number;
  tagline: string;
  x: number;
  y: number;
  floatDelay: string;
}

export function RoadSign({
  app,
  step,
  tagline,
  x,
  y,
  floatDelay,
}: RoadSignProps) {
  const Icon = app.icon;

  if (!app.href) return null;

  return (
    <foreignObject
      x={x}
      y={y}
      width={248}
      height={120}
      className="overflow-visible"
    >
      <div>
        <a
          href={app.href}
          target="_blank"
          rel="noopener noreferrer"
          className="highway-sign group"
          style={{ animationDelay: floatDelay }}
          aria-label={`Open ${app.title}`}
        >
          <span className="highway-sign-pole" aria-hidden />
          <span className="highway-sign-board">
            <span className="highway-sign-step">{step}</span>
            <Icon className="highway-sign-icon" strokeWidth={2} />
            <span className="highway-sign-copy">
              <span className="highway-sign-tagline">{tagline}</span>
              <span className="highway-sign-title">{app.title}</span>
            </span>
            <span className="highway-sign-arrow" aria-hidden>
              ↗
            </span>
          </span>
          <span className="highway-sign-hint">{app.description}</span>
        </a>
      </div>
    </foreignObject>
  );
}
