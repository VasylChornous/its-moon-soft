const Logo = ({ onClick }) => (
  <a
    href="#hero"
    onClick={onClick}
    className="flex items-center gap-2.5 group shrink-0"
  >
    {/* moon icon */}
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className="transition-transform duration-500 group-hover:rotate-12"
    >
      <path
        d="M22 15.5A10 10 0 1 1 12.5 6a7.5 7.5 0 0 0 9.5 9.5z"
        fill="url(#moon-grad)"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="0.5"
      />
      <defs>
        <linearGradient
          id="moon-grad"
          x1="4"
          y1="4"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ac6aff" />
          <stop offset="100%" stopColor="#858dff" />
        </linearGradient>
      </defs>
    </svg>

    <span
      className="font-semibold text-sm tracking-wide leading-none"
      style={{
        background:
          "linear-gradient(90deg, #ac6aff 0%, #858dff 35%, #ffc876 65%, #ff98e2 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      It'sMoonSoft
    </span>
  </a>
);

export default Logo;
