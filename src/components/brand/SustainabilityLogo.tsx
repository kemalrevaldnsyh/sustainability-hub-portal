interface SustainabilityLogoProps {
  className?: string;
  size?: number;
}

const LOGO_COLOR = "#C04A3E";

const ARM_PATH =
  "M36 28C36 16 48 8 58 14C64 18 64 28 58 34C52 38 44 36 38 32L36 28Z";

function LogoMark() {
  return (
    <g fill={LOGO_COLOR}>
      <path d={ARM_PATH} />
      <path d={ARM_PATH} transform="rotate(90 32 32)" />
      <path d={ARM_PATH} transform="rotate(180 32 32)" />
      <path d={ARM_PATH} transform="rotate(270 32 32)" />
    </g>
  );
}

export function SustainabilityLogo({
  className,
  size = 40,
}: SustainabilityLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <LogoMark />
    </svg>
  );
}
