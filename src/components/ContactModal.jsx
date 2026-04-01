import { useState, useEffect, useCallback, useRef } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import SuccessView from "./SuccessView";
import Spinner from "./Spinner";

const EMAILJS_CONFIG = {
  serviceId: "service_q1d8p3q",
  templateId: "template_g6zedsc",
  publicKey: "yGf6vCDhzRCoRMeYk",
};

const INITIAL_FORM = Object.freeze({
  name: "",
  email: "",
  phone: "",
  website: "",
  message: "",
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

let cachedCountry = null;
const countryPromise = fetch("https://ip2c.org/s")
  .then((res) => res.text())
  .then((text) => {
    const parts = text.split(";");
    if (parts[0] === "1" && parts[1]) cachedCountry = parts[1].toLowerCase();
  })
  .catch(() => {});

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required";
  if (!form.email.trim()) errors.email = "Email is required";
  else if (!EMAIL_RE.test(form.email)) errors.email = "Enter a valid email";
  if (!form.phone || form.phone.replace(/\D/g, "").length < 7)
    errors.phone = "Enter a valid phone number";
  return errors;
}

function TextField({ label, required, error, ...props }) {
  return (
    <div>
      <label className="block text-stone-400 text-xs font-medium tracking-wide uppercase mb-2">
        {label}
        {required && <span className="text-amber-500 ml-0.5">*</span>}
      </label>
      <input
        {...props}
        className={`
          w-full bg-transparent rounded-xl border-2 px-4 py-3.5
          text-stone-900 text-[15px] placeholder:text-stone-300
          focus:outline-none focus:border-stone-900
          transition-colors duration-200
          ${error ? "border-red-400" : "border-stone-200"}
        `}
      />
      {error && <p className="text-xs text-red-500 mt-1.5 pl-1">{error}</p>}
    </div>
  );
}

export default function ContactModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ ...INITIAL_FORM });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [defaultCountry, setDefaultCountry] = useState(cachedCountry || "ua");
  const modalRef = useRef(null);

  useEffect(() => {
    if (!cachedCountry) {
      countryPromise.then(() => {
        if (cachedCountry) setDefaultCountry(cachedCountry);
      });
    }
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      modalRef.current?.querySelector('input[name="name"]')?.focus();
    }, 100);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      clearTimeout(timer);
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setForm({ ...INITIAL_FORM });
      setErrors({});
      setStatus("idle");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !modalRef.current) return;
    const timer = setTimeout(() => {
      const btn = modalRef.current?.querySelector(
        ".react-international-phone-country-selector-button"
      );
      if (btn) btn.setAttribute("tabindex", "-1");
    }, 150);
    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleChange = (e) => updateField(e.target.name, e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          website: form.website,
          message: form.message,
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus("success");
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-stretch sm:items-center justify-center p-0 sm:p-4"
      style={{
        background: "rgba(28, 25, 23, 0.5)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      <div
        ref={modalRef}
        className="relative w-full sm:max-w-xl bg-white sm:rounded-2xl shadow-2xl overflow-y-auto sm:max-h-[90vh] flex flex-col"
        style={{
          animation: "modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="h-1 w-full bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400" />

        {status !== "success" && (
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center
                       text-stone-400 hover:text-stone-800 hover:bg-stone-100 transition-all duration-200 z-10"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="px-5 py-6 sm:px-10 sm:py-10 flex-1 flex flex-col">
          {status === "success" ? (
            <SuccessView onClose={onClose} />
          ) : (
            <>
              <header className="mb-6 sm:mb-8">
                <p className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  Get in touch
                </p>
                <h2 className="text-stone-900 text-xl sm:text-2xl font-bold leading-snug tracking-tight">
                  Let's build something
                  <br />
                  remarkable together
                </h2>
              </header>

              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <TextField
                    label="Name"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    error={errors.name}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    required
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    error={errors.email}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-stone-400 text-xs font-medium tracking-wide uppercase mb-2">
                      Phone <span className="text-amber-500 ml-0.5">*</span>
                    </label>
                    <div
                      className={`rounded-xl border-2 transition-colors duration-200 focus-within:border-stone-900 cursor-text ${
                        errors.phone ? "border-red-400" : "border-stone-200"
                      }`}
                    >
                      <PhoneInput
                        defaultCountry={defaultCountry}
                        value={form.phone}
                        onChange={(phone) => updateField("phone", phone)}
                        inputProps={{
                          onMouseDown: (e) => {
                            e.preventDefault();
                            const input = e.target;
                            input.focus();
                            const len = input.value.length;
                            input.setSelectionRange(len, len);
                          },
                        }}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1.5 pl-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <TextField
                    label="Website"
                    name="website"
                    value={form.website}
                    onChange={handleChange}
                    placeholder="https://..."
                  />
                </div>

                <div>
                  <label className="block text-stone-400 text-xs font-medium tracking-wide uppercase mb-2">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, timeline and budget..."
                    className="w-full bg-transparent rounded-xl border-2 border-stone-200 px-4 py-3.5
                               text-stone-900 text-[15px] placeholder:text-stone-300
                               focus:outline-none focus:border-stone-900 transition-colors duration-200 resize-none"
                  />
                </div>

                <div className="flex flex-col items-center sm:flex-row sm:items-center gap-3 sm:gap-4 pt-1">
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="relative flex items-center justify-center gap-3 rounded-full px-8 py-4 font-bold text-sm
                               tracking-wider uppercase text-white transition-all duration-200 w-full sm:w-auto
                               hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-px
                               active:translate-y-0 active:shadow-none
                               disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{
                      background: "linear-gradient(135deg, #292524, #44403c)",
                    }}
                  >
                    {status === "sending" ? (
                      <>
                        <Spinner />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-xs text-red-500 text-center sm:text-left">
                      Failed to send - please try again
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Inline keyframes + phone input overrides */}
        <style>{`
          @keyframes modalIn {
            from { opacity: 0; }
            to   { opacity: 1; }
          }
          @media (min-width: 640px) {
            @keyframes modalIn {
              from { opacity: 0; transform: translateY(16px) scale(0.97); }
              to   { opacity: 1; transform: translateY(0) scale(1); }
            }
          }
          .react-international-phone-input-container {
            border: none !important;
            gap: 0 !important;
          }
          .react-international-phone-country-selector-button {
            border: none !important;
            background: transparent !important;
            padding: 0 12px !important;
            margin: 0 !important;
            height: 52px !important;
          }
          .react-international-phone-country-selector-dropdown {
            border-radius: 12px !important;
            border: 1px solid #e7e5e4 !important;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1) !important;
            margin-top: 8px !important;
            z-index: 50 !important;
            max-height: 200px !important;
          }
          .react-international-phone-input {
            border: none !important;
            height: 52px !important;
            font-size: 15px !important;
            background: transparent !important;
          }
          .react-international-phone-input-container .react-international-phone-input {
            background: transparent !important;
          }
          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px #fafafa inset !important;
            -webkit-text-fill-color: #1c1917 !important;
            caret-color: #1c1917 !important;
            transition: background-color 5000s ease-in-out 0s !important;
          }
        `}</style>
      </div>
    </div>
  );
}
