import Section from "./Section";

const CTA = ({ onOpenModal }) => (
  <Section
    className="pt-12 sm:pt-32 pb-12 sm:pb-16 -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="cta"
  >
    <div className="container mx-auto">
      <div
        className="relative rounded-[2rem] px-8 py-16 md:px-20 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10"
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="flex flex-col gap-4 max-w-lg">
          <p className="tagline text-n-4">Ready when you are</p>
          <h2 className="h2 font-semibold text-n-1 leading-tight">
            Let’s build something that drives
            <br />
            real results
          </h2>
          <p className="body-2 text-n-4 max-w-sm">
            From idea to production - fast, focused and built by people who’ve
            done it before
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
          <button
            onClick={onOpenModal}
            className="group flex items-center gap-3 px-7 py-4 rounded-full
                       border border-n-5 hover:border-n-3
                       text-n-1 text-sm font-semibold uppercase tracking-widest
                       transition-all duration-300 hover:bg-white/5
                       hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10
                       active:translate-y-0 active:shadow-none cursor-pointer"
          >
            Get a product audit
            <svg
              className="transition-transform duration-300 group-hover:translate-x-1"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div
          className="pointer-events-none absolute top-0 left-0 w-32 h-32 rounded-tl-[2rem] opacity-20"
          style={{
            background:
              "radial-gradient(circle at top left, #ac6aff, transparent 70%)",
          }}
        />
      </div>
    </div>
  </Section>
);

export default CTA;
