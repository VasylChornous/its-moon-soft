import { twMerge } from "tailwind-merge";

const CTAButton = ({ className, onClick, children }) => (
  <button
    onClick={onClick}
    className={twMerge(
      `relative inline-flex items-center px-5 py-2.5 rounded-full
       text-n-1 font-code text-xs font-bold uppercase tracking-widest
       transition-all duration-300 hover:text-white
       hover:-translate-y-0.2 hover:shadow-lg hover:shadow-purple-500/25
       active:translate-y-0 active:shadow-none cursor-pointer`,
      className
    )}
    style={{
      background:
        "linear-gradient(#0e0c15, #0e0c15) padding-box, linear-gradient(90deg, #ac6aff, #ffc876, #ff98e2) border-box",
      border: "1px solid transparent",
    }}
  >
    {children}
  </button>
);

export default CTAButton;
