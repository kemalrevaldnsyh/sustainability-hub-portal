"use client";

import { apps } from "@/data/apps";

import {
  MARKER_POSITIONS,
  ROAD_PATH,
  roadSignConfigs,
} from "./roadConfig";
import { RoadSign } from "./RoadSign";

export function RoadScene() {
  const activeApps = apps.filter((app) => app.status === "active");

  return (
    <div className="road-scene relative mx-auto w-full max-w-6xl">
      <div className="road-scene-inner relative min-h-[720px] sm:min-h-[820px] lg:min-h-[880px]">
        <svg
          viewBox="0 0 1200 900"
          className="absolute inset-0 h-full w-full"
          aria-label="Sustainability journey road map"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="road-surface" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6b7280" />
              <stop offset="100%" stopColor="#4b5563" />
            </linearGradient>
            <linearGradient id="ground-glow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#86efac" stopOpacity="0.18">
                <animate
                  attributeName="stop-opacity"
                  values="0.14;0.22;0.14"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1">
                <animate
                  attributeName="stop-opacity"
                  values="0.08;0.16;0.08"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            <path id="road-motion-path" d={ROAD_PATH} fill="none" />
          </defs>

          <g pointerEvents="none">
            <rect width="1200" height="900" fill="url(#ground-glow)" rx="24" />

            <g className="road-clouds">
              <ellipse cx="200" cy="80" rx="70" ry="28" fill="#fff" opacity="0.35">
                <animate
                  attributeName="cx"
                  values="160;280;160"
                  dur="18s"
                  repeatCount="indefinite"
                />
              </ellipse>
              <ellipse cx="900" cy="120" rx="90" ry="32" fill="#fff" opacity="0.28">
                <animate
                  attributeName="cx"
                  values="840;1020;840"
                  dur="22s"
                  repeatCount="indefinite"
                />
              </ellipse>
            </g>

            <path
              d={ROAD_PATH}
              fill="none"
              stroke="#374151"
              strokeWidth="72"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.35"
            />
            <path
              d={ROAD_PATH}
              fill="none"
              stroke="url(#road-surface)"
              strokeWidth="58"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={ROAD_PATH}
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="22 26"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="-96"
                dur="0.9s"
                repeatCount="indefinite"
              />
            </path>

            <g className="road-trees">
              <ellipse cx="60" cy="280" rx="36" ry="48" fill="#16a34a" opacity="0.22">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 60 280;3 60 280;0 60 280;-2 60 280;0 60 280"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </ellipse>
              <ellipse cx="1120" cy="180" rx="42" ry="54" fill="#15803d" opacity="0.2">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 1120 180;-2 1120 180;0 1120 180;2 1120 180;0 1120 180"
                  dur="7s"
                  repeatCount="indefinite"
                />
              </ellipse>
              <ellipse cx="1080" cy="520" rx="38" ry="50" fill="#22c55e" opacity="0.18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 1080 520;2 1080 520;0 1080 520"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </ellipse>
              <ellipse cx="90" cy="680" rx="40" ry="52" fill="#16a34a" opacity="0.2">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="0 90 680;-3 90 680;0 90 680"
                  dur="6.5s"
                  repeatCount="indefinite"
                />
              </ellipse>
            </g>

            <g transform="translate(88, 88)">
              <rect
                x="0"
                y="0"
                width="118"
                height="34"
                rx="4"
                fill="#14532d"
                stroke="#fff"
                strokeWidth="2"
              />
              <text
                x="59"
                y="14"
                textAnchor="middle"
                fill="#bbf7d0"
                fontSize="9"
                fontWeight="600"
                letterSpacing="2"
              >
                START
              </text>
              <text
                x="59"
                y="27"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="11"
                fontWeight="700"
              >
                Journey
              </text>
              <line x1="59" y1="34" x2="59" y2="52" stroke="#64748b" strokeWidth="3" />
            </g>

            <g transform="translate(1010, 748)">
              <line x1="0" y1="0" x2="0" y2="18" stroke="#64748b" strokeWidth="3" />
              <rect
                x="-72"
                y="18"
                width="144"
                height="28"
                rx="4"
                fill="#334155"
                stroke="#fff"
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x="0"
                y="36"
                textAnchor="middle"
                fill="#e2e8f0"
                fontSize="9"
                fontWeight="600"
                letterSpacing="1.5"
              >
                KEEP GOING
              </text>
            </g>

            {MARKER_POSITIONS.map((marker, index) => (
              <g key={marker.step}>
                <circle
                  cx={marker.cx}
                  cy={marker.cy}
                  r="18"
                  fill="none"
                  stroke="#C04A3E"
                  strokeWidth="2"
                  opacity="0.45"
                >
                  <animate
                    attributeName="r"
                    values="18;32;18"
                    dur="2.2s"
                    begin={`${index * 0.6}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0;0.5"
                    dur="2.2s"
                    begin={`${index * 0.6}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <circle
                  cx={marker.cx}
                  cy={marker.cy}
                  r="14"
                  fill="#ffffff"
                  stroke="#C04A3E"
                  strokeWidth="3"
                >
                  <animate
                    attributeName="r"
                    values="14;16;14"
                    dur="1.8s"
                    begin={`${index * 0.4}s`}
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  x={marker.cx}
                  y={marker.cy + 5}
                  textAnchor="middle"
                  fill="#9A3B32"
                  fontSize="13"
                  fontWeight="700"
                >
                  {marker.step}
                </text>
              </g>
            ))}

            <g>
              <circle r="10" fill="#C04A3E" stroke="#fff" strokeWidth="2.5">
                <animateMotion
                  dur="14s"
                  repeatCount="indefinite"
                  rotate="auto"
                  calcMode="linear"
                >
                  <mpath href="#road-motion-path" />
                </animateMotion>
              </circle>
            </g>

            <g>
              <rect
                x="-11"
                y="-7"
                width="22"
                height="14"
                rx="3"
                fill="#15803d"
                stroke="#fff"
                strokeWidth="1.5"
              />
              <circle cx="-5" cy="9" r="3" fill="#1e293b" />
              <circle cx="5" cy="9" r="3" fill="#1e293b" />
              <animateMotion
                dur="20s"
                repeatCount="indefinite"
                rotate="auto"
                calcMode="linear"
              >
                <mpath href="#road-motion-path" />
              </animateMotion>
            </g>

            <g opacity="0.85">
              <circle r="6" fill="#fbbf24" stroke="#fff" strokeWidth="1.5">
                <animateMotion
                  dur="9s"
                  repeatCount="indefinite"
                  rotate="auto"
                  calcMode="linear"
                  keyPoints="1;0"
                  keyTimes="0;1"
                >
                  <mpath href="#road-motion-path" />
                </animateMotion>
              </circle>
            </g>
          </g>

          <g pointerEvents="all">
            {activeApps.map((app, index) => {
              const config = roadSignConfigs[index];
              if (!config) return null;

              return (
                <RoadSign
                  key={app.id}
                  app={app}
                  step={config.step}
                  tagline={config.tagline}
                  x={config.x}
                  y={config.y}
                  floatDelay={config.floatDelay}
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
