const MoonSectionSvg = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="moonGlow" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#d4d0e8" />
          <stop offset="100%" stopColor="#9b95b8" />
        </radialGradient>
        <filter id="moonShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="0.8"
            floodColor="#c8c3e0"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
      <path
        d="M12.3 9.8A6 6 0 0 1 5.2 2.7a6.5 6.5 0 1 0 7.8 7.8.4.4 0 0 0-.7-.7z"
        fill="url(#moonGlow)"
        filter="url(#moonShadow)"
      />
      <circle cx="7" cy="6.5" r="0.6" fill="#b8b3d0" opacity="0.4" />
      <circle cx="9.2" cy="9" r="0.45" fill="#b8b3d0" opacity="0.3" />
      <circle cx="6" cy="9.5" r="0.35" fill="#b8b3d0" opacity="0.25" />
    </svg>
  );
};

export default MoonSectionSvg;
