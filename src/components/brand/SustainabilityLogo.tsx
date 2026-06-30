interface SustainabilityLogoProps {
  className?: string;
  size?: number;
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
      <defs>
        <linearGradient
          id="logoBg"
          x1="8"
          y1="8"
          x2="56"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F87171" />
          <stop offset="1" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient
          id="logoLeafL"
          x1="18"
          y1="16"
          x2="30"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF1F2" />
          <stop offset="1" stopColor="#FECACA" />
        </linearGradient>
        <linearGradient
          id="logoLeafR"
          x1="34"
          y1="16"
          x2="46"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF1F2" />
          <stop offset="1" stopColor="#FECACA" />
        </linearGradient>
      </defs>

      <circle cx="32" cy="32" r="28" fill="url(#logoBg)" />
      <circle cx="32" cy="32" r="28" stroke="#B91C1C" strokeWidth="1" opacity="0.18" />

      <path
        d="M22 34c0-8 4-14 10-16 2 6 0 12-4 16-2 2-4 2-6 0z"
        fill="url(#logoLeafL)"
      />
      <path
        d="M42 34c0-8-4-14-10-16-2 6 0 12 4 16 2 2 4 2 6 0z"
        fill="url(#logoLeafR)"
      />

      <path
        d="M32 20v20"
        stroke="#FFF1F2"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M24 42c4 3 12 3 16 0"
        stroke="#FECACA"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      />

      <circle cx="32" cy="20" r="2.2" fill="#FFF1F2" opacity="0.85" />
    </svg>
  );
}
