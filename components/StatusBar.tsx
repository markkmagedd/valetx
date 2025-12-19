export default function StatusBar({
  theme = "dark",
}: {
  theme?: "dark" | "light";
}) {
  const textColor = theme === "dark" ? "text-white" : "text-gray-800";

  return (
    <div className={`status-bar ${textColor}`}>
      <div className="flex items-center gap-1">
        <span className="font-semibold">9:41</span>
      </div>

      <div className="flex items-center gap-1.5">
        {/* Signal Strength */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor">
          <rect x="0" y="8" width="3" height="4" rx="0.5" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" />
          <rect x="10" y="2" width="3" height="10" rx="0.5" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" />
        </svg>

        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 12C8.82843 12 9.5 11.3284 9.5 10.5C9.5 9.67157 8.82843 9 8 9C7.17157 9 6.5 9.67157 6.5 10.5C6.5 11.3284 7.17157 12 8 12Z" />
          <path
            d="M4.5 7C5.5 6 6.5 5.5 8 5.5C9.5 5.5 10.5 6 11.5 7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M2 4C3.5 2.5 5.5 1.5 8 1.5C10.5 1.5 12.5 2.5 14 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Battery */}
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
          <rect
            x="0.5"
            y="1.5"
            width="20"
            height="9"
            rx="2"
            stroke="currentColor"
            strokeWidth="1"
          />
          <rect x="2" y="3" width="17" height="6" rx="1" fill="currentColor" />
          <rect
            x="21.5"
            y="4"
            width="2.5"
            height="4"
            rx="1"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
