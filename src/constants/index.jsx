export const navigation = [
  { id: "1", title: "Services", url: "#services" },
  { id: "0", title: "About Us", url: "#about" },
  { id: "2", title: "Teams", url: "#teams" },
  { id: "3", title: "Contact", url: "#cta" },
];

// About Us section
export const featuresData = [
  {
    title: "Product-first thinking",
    text: "We don't just execute briefs - we challenge assumptions, ask hard questions and push for solutions that serve your users and your business goals.",
    accent: "#ac6aff",
  },
  {
    title: "Speed without sacrifice",
    text: "Our teams are built for momentum. We move fast through discovery, design and delivery - without cutting corners on quality or craft.",
    accent: "#858dff",
  },
  {
    title: "Transparent by default",
    text: "Every sprint, every decision, every blocker - you see it all. No surprises, no black boxes. Just clear communication from day one.",
    accent: "#ffc876",
  },
  {
    title: "Long-term partnership",
    text: "Our best relationships don't end at launch. We stay close, iterate based on real data and grow with your product over time.",
    accent: "#7adb78",
  },
];

// Footer Links
export const footerLinks = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Teams", href: "#teams" },
  { label: "Contact", href: "#cta" },
];

// Hero Services
export const services = [
  { label: "UI / UX Design", accent: "#ac6aff" },
  { label: "Web Development", accent: "#858dff" },
  { label: "Mobile Apps", accent: "#ffc876" },
  { label: "Brand Identity", accent: "#ff98e2" },
  { label: "Product Strategy", accent: "#7adb78" },
];

export const servicesData = [
  {
    id: 1,
    title: "UI / UX Design",
    text: "We combine strategic UX thinking with visually refined UI to build digital experiences that are intuitive, consistent and crafted to perform.",
    accent: "#ac6aff",
    accentRgb: "172,106,255",
    tag: "Design",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M9 9h1M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Web Development",
    text: "We build fast, scalable web applications with clean architecture. React, Next.js, Node we pick the right stack for your product not the trendy one.",
    accent: "#858dff",
    accentRgb: "133,141,255",
    tag: "Engineering",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Mobile Applications",
    text: "iOS and Android apps that feel native, perform smoothly and scale with your user base. We handle everything from MVP to App Store launch.",
    accent: "#ffc876",
    accentRgb: "255,200,118",
    tag: "Mobile",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Brand Identity",
    text: "Logo, typography, color systems and guidelines - we create brand identities that hold up across every touchpoint and grow with your company.",
    accent: "#ff98e2",
    accentRgb: "255,152,226",
    tag: "Branding",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Product Strategy",
    text: "Before the first pixel or line of code we help you validate, prioritize and plan. Strategic clarity that saves months of expensive rework later.",
    accent: "#7adb78",
    accentRgb: "122,219,120",
    tag: "Strategy",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Ongoing Support",
    text: "Post-launch is where most agencies disappear. We stay. Performance monitoring, feature iterations, bug fixes we're a long-term partner not a project shop.",
    accent: "#ff776f",
    accentRgb: "255,119,111",
    tag: "Support",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export const teamCards = [
  {
    accent: "#ac6aff",
    accentRgb: "172,106,255",
    title: "Designers who think in systems",
    text: "Our UI/UX team doesn't just make things look good - they architect experiences that convert, retain and delight. Every pixel has a purpose.",
    tag: "Design",
  },
  {
    accent: "#ffc876",
    accentRgb: "255,200,118",
    title: "Engineers who ship with confidence",
    text: "From clean APIs to polished frontends, our developers write code that scales. No technical debt, no shortcuts - just solid, maintainable software.",
    tag: "Engineering",
  },
  {
    accent: "#858dff",
    accentRgb: "133,141,255",
    title: "Strategists who connect dots",
    text: "We embed product thinkers into every team. They align business goals with technical decisions so what gets built actually moves the needle.",
    tag: "Strategy",
  },
  {
    accent: "#ff776f",
    accentRgb: "255,119,111",
    title: "QA minds obsessed with quality",
    text: "Before anything ships, our QA specialists break it apart. Edge cases, accessibility, performance - nothing slips through the cracks.",
    tag: "Quality",
  },
  {
    accent: "#7adb78",
    accentRgb: "122,219,120",
    title: "PMs who respect your time",
    text: "No endless status calls. Our project managers run tight loops, surface blockers fast and keep every sprint moving toward the outcome that matters.",
    tag: "Management",
  },
  {
    accent: "#ff98e2",
    accentRgb: "255,152,226",
    title: "A culture built on ownership",
    text: "Everyone on an It'sMoonSoft team treats your product like their own. That mindset turns good work into exceptional outcomes, every single time.",
    tag: "Culture",
  },
];
