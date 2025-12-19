export function CarKeyIcon({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28 14C28 18.4183 24.4183 22 20 22C15.5817 22 12 18.4183 12 14C12 9.58172 15.5817 6 20 6C24.4183 6 28 9.58172 28 14Z"
        stroke="#1a2942"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="14" r="3" fill="#1a2942" />
      <path
        d="M26 20L32 26L30 28L28 26L26 28L24 26L26 24"
        stroke="#1a2942"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 26L36 30L34 32L30 28"
        stroke="#1a2942"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BellIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 8C19.5817 8 16 11.5817 16 16V24L12 28V32H36V28L32 24V16C32 11.5817 28.4183 8 24 8Z"
        fill="#1a2942"
      />
      <path
        d="M21 36C21 37.6569 22.3431 39 24 39C25.6569 39 27 37.6569 27 36"
        stroke="#1a2942"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="12" r="4" fill="#FDB913" />
    </svg>
  );
}

export function ValetServiceIcon({
  className = "w-20 h-20",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Car */}
      <g transform="translate(10, 35)">
        <rect x="8" y="10" width="44" height="16" rx="2" fill="white" />
        <rect x="0" y="18" width="60" height="12" rx="3" fill="white" />
        <path d="M8 18L12 10H48L52 18" fill="white" />
        <circle cx="14" cy="30" r="4" fill="#D1D5DB" />
        <circle cx="46" cy="30" r="4" fill="#D1D5DB" />
        <rect
          x="18"
          y="12"
          width="10"
          height="8"
          rx="1"
          fill="#1a2942"
          opacity="0.3"
        />
        <rect
          x="32"
          y="12"
          width="10"
          height="8"
          rx="1"
          fill="#1a2942"
          opacity="0.3"
        />
      </g>

      {/* Person */}
      <g transform="translate(50, 20)">
        <circle cx="8" cy="6" r="5" fill="white" />
        <path
          d="M2 16C2 13 4 11 8 11C12 11 14 13 14 16V24H2V16Z"
          fill="white"
        />
        <rect x="6" y="24" width="4" height="8" fill="white" />
        <rect x="3" y="30" width="3" height="6" fill="white" />
        <rect x="10" y="30" width="3" height="6" fill="white" />
      </g>
    </svg>
  );
}
