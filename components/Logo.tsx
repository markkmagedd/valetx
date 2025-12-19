export default function Logo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Yellow X Accent */}
        <svg
          width="140"
          height="80"
          viewBox="0 0 140 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-3 -right-8"
        >
          {/* X shape */}
          <path
            d="M 100 10 L 130 40 M 130 10 L 100 40"
            stroke="#FDB913"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* VALET Text */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-extrabold text-white tracking-wider">
            VALET
          </h1>
        </div>
      </div>
    </div>
  );
}
