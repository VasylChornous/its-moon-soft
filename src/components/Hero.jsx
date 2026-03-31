import { useRef } from "react";
import Section from "./Section";
import { services } from "../constants";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[6rem] sm:pt-[9rem] -mt-[5.25rem]"
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color-1 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-color-1" />
            </span>
            <span className="tagline text-n-4">Digital Studio · Est. 2021</span>
          </div>

          <h1 className="h1 mb-4 text-n-1">
            We are{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #ac6aff 0%, #858dff 50%, #ffc876 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              It'sMoonSoft
            </span>
          </h1>
          <h2 className="h2 mb-8 text-n-3">
            We design build and scale products that drive real business results
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {services.map((s) => (
              <span
                key={s.label}
                className="px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-widest
                           border transition-all duration-200 hover:scale-[1.03] cursor-default"
                style={{
                  borderColor: `${s.accent}40`,
                  color: s.accent,
                  background: `${s.accent}0d`,
                }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-1 max-w-[62rem] mx-auto">
          <div
            className="relative w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden
                        px-6 sm:px-10 md:px-14 pt-10 pb-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full opacity-25"
              style={{
                background:
                  "radial-gradient(circle, #ac6aff 0%, transparent 70%)",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 w-[320px] h-[320px] rounded-full opacity-15"
              style={{
                background:
                  "radial-gradient(circle, #858dff 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
              <div className="flex flex-row lg:flex-col gap-8 lg:gap-6 flex-shrink-0">
                {[
                  { value: "5+", label: "Years in business" },
                  { value: "100+", label: "Projects shipped" },
                  { value: "98%", label: "Client satisfaction" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span
                      className="font-black leading-none"
                      style={{
                        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                        background:
                          "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-n-4 text-xs font-medium mt-1 tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="hidden lg:block w-px self-stretch"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />

              <div className="flex-1 flex flex-col gap-6">
                <p className="text-n-3 text-base leading-relaxed max-w-lg">
                  From the first wireframe to the final deployment we partner
                  with ambitious founders and growing teams to turn complex
                  ideas into polished high-performance digital products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
