export default function SuccessView({ onClose }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 py-10 sm:py-16 gap-4 sm:gap-5 text-center">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-50 flex items-center justify-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#059669"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="sm:w-7 sm:h-7"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div>
        <h3 className="text-stone-900 text-lg sm:text-xl font-bold">
          We've got your message
        </h3>
        <p className="text-stone-400 text-sm mt-1.5 max-w-xs mx-auto">
          Expect a reply within one business day.
        </p>
      </div>
      <button
        onClick={onClose}
        className="mt-2 px-7 py-3 rounded-full bg-stone-900 text-white text-sm font-semibold
                   hover:bg-stone-800 transition-colors duration-200 w-full sm:w-auto"
      >
        Done
      </button>
    </div>
  );
}
