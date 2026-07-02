export const ROAD_PATH =
  "M 100 120 C 260 100, 300 220, 460 240 S 700 280, 660 420 S 500 560, 700 660 S 960 760, 1040 780";

export interface RoadSignConfig {
  step: number;
  tagline: string;
  x: number;
  y: number;
  floatDelay: string;
}

export const roadSignConfigs: RoadSignConfig[] = [
  {
    step: 1,
    tagline: "Due diligence",
    x: 24,
    y: 52,
    floatDelay: "0s",
  },
  {
    step: 2,
    tagline: "Carbon tracking",
    x: 748,
    y: 298,
    floatDelay: "1.1s",
  },
  {
    step: 3,
    tagline: "Supplier hub",
    x: 48,
    y: 538,
    floatDelay: "2.2s",
  },
];

export const MARKER_POSITIONS = [
  { step: 1, cx: 180, cy: 150 },
  { step: 2, cx: 680, cy: 380 },
  { step: 3, cx: 520, cy: 620 },
] as const;
