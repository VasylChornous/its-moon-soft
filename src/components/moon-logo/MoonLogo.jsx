import { useEffect, useRef, useState } from "react";
import moonImg from "../../assets/svg/full-moon.jpg";

export default function MoonLogo() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hasEntered, setHasEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [size, setSize] = useState(36);
  const containerRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1018;
      setIsMobile(mobile);
      setSize(mobile ? 24 : 36);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let active = true;

    const tick = () => {
      if (!active) return;
      const ease = 0.07;
      currentRef.current.x +=
        (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y +=
        (targetRef.current.y - currentRef.current.y) * ease;

      const dx = Math.abs(currentRef.current.x - targetRef.current.x);
      const dy = Math.abs(currentRef.current.y - targetRef.current.y);
      if (dx > 0.002 || dy > 0.002) {
        setPos({ x: currentRef.current.x, y: currentRef.current.y });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const handleMouseMove = (e) => {
      setHasEntered(true);
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      targetRef.current.x = Math.max(-1, Math.min(1, nx));
      targetRef.current.y = Math.max(-1, Math.min(1, ny));
    };

    const handleMouseLeave = () => {};

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      active = false;
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Bright spot follows the cursor
  const dist = Math.sqrt(pos.x * pos.x + pos.y * pos.y);
  const brightX = 50 + pos.x * 45;
  const brightY = 50 + pos.y * 45;
  const spread = 25 - dist * 12;
  // Overlay fades out as cursor approaches center (dist 0 = no darkness)
  const overlayOpacity = Math.min(1, dist / 0.5);

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer"
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        marginTop: 0,
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Moon image */}
        <img
          src={moonImg}
          alt="Moon logo"
          width={size}
          height={size}
          style={{
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Dark overlay — only render on non-mobile */}
        {!isMobile && hasEntered && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: overlayOpacity,
              background: `radial-gradient(circle at ${brightX}% ${brightY}%, transparent ${spread}%, rgba(0,0,0,0.4) ${
                spread + 12
              }%, rgba(0,0,0,0.85) ${spread + 25}%, #000 ${spread + 40}%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
