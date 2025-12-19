export default function MapView() {
  return (
    <div className="map-view w-full h-64 relative">
      {/* Simplified map illustration */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background */}
        <rect width="300" height="200" fill="#E8EEF2" />

        {/* Streets - horizontal */}
        <line
          x1="0"
          y1="60"
          x2="300"
          y2="60"
          stroke="#D1D9E0"
          strokeWidth="2"
        />
        <line
          x1="0"
          y1="120"
          x2="300"
          y2="120"
          stroke="#D1D9E0"
          strokeWidth="2"
        />
        <line
          x1="0"
          y1="180"
          x2="300"
          y2="180"
          stroke="#D1D9E0"
          strokeWidth="2"
        />

        {/* Streets - vertical */}
        <line
          x1="80"
          y1="0"
          x2="80"
          y2="200"
          stroke="#D1D9E0"
          strokeWidth="2"
        />
        <line
          x1="150"
          y1="0"
          x2="150"
          y2="200"
          stroke="#D1D9E0"
          strokeWidth="2"
        />
        <line
          x1="220"
          y1="0"
          x2="220"
          y2="200"
          stroke="#D1D9E0"
          strokeWidth="2"
        />

        {/* Diagonal streets */}
        <line
          x1="0"
          y1="0"
          x2="300"
          y2="200"
          stroke="#D1D9E0"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <line
          x1="0"
          y1="100"
          x2="200"
          y2="200"
          stroke="#D1D9E0"
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* River/Water feature */}
        <path
          d="M 0 140 Q 100 130 200 145 T 300 140"
          stroke="#A8D5E2"
          strokeWidth="12"
          fill="none"
          opacity="0.7"
        />

        {/* Green spaces */}
        <rect
          x="20"
          y="20"
          width="40"
          height="30"
          fill="#C8E6C9"
          opacity="0.6"
          rx="4"
        />
        <rect
          x="180"
          y="80"
          width="50"
          height="35"
          fill="#C8E6C9"
          opacity="0.6"
          rx="4"
        />

        {/* Location marker (current position) */}
        <g transform="translate(150, 100)">
          <circle cx="0" cy="0" r="20" fill="#FDB913" opacity="0.2" />
          <circle cx="0" cy="0" r="12" fill="#FDB913" opacity="0.4" />
          <circle cx="0" cy="0" r="6" fill="#FDB913" />
        </g>
      </svg>
    </div>
  );
}
