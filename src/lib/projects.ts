export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  live?: boolean;
  gradient: string;
  year: string;
  role: string;
  client: string;
  duration: string;
  stack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  highlights: string[];
  screenshot?: string;
};

const shot = (url: string) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800`;

export const projects: Project[] = [
  {
    slug: "ai-inventory-pro",
    title: "AI Inventory Pro",
    description:
      "A complete enterprise-grade inventory scanner and purchase order tracker utilizing vision translation models and data analytics.",
    tags: ["Python", "Flask", "Gemini API", "HTML/CSS", "ERP"],
    href: "#",
    live: false,
    gradient: "from-purple-500/40 via-indigo-500/30 to-blue-500/30",
    year: "2026",
    role: "Lead Full-Stack Developer",
    client: "Academic FYP",
    duration: "6 months",
    stack: ["Python", "Flask", "Gemini API", "HTML5", "CSS3", "JavaScript", "ERP Frameworks"],
    challenge:
      "Warehouse tracking environments require manual calculations of stock intake lists containing non-standard notation formats, leading to data errors and low supply chain visibility.",
    solution:
      "I engineered an operational hub that securely accepts image uploads of inventory lists, processes text elements using the Gemini API, displays live parsing evaluations (Detected script vs English mapping), and tracks analytics (Stockout metrics, forecasted trends) under custom enterprise parameters.",
    outcome:
      "Successfully combined analytical stock models with cross-language item translation systems for error-free purchase logging.",
    highlights: [
      "State-based inventory health evaluation tracking",
      "Dynamic multi-column data translations",
      "Robust dashboard interface optimized with plain HTML and CSS layouts",
    ],
    screenshot: "/ai-inventory.jpg",
  },
  {
    slug: "ai-automation-pipeline",
    title: "Autonomous BOM Inventory Agent",
    description:
      "A zero-touch workspace execution pipeline triggering dynamic database adjustments and text distribution loops from operational chat points.",
    tags: ["n8n", "OpenAI", "Google Sheets", "Python"],
    href: "#",
    live: false,
    gradient: "from-emerald-500/40 via-teal-500/30 to-cyan-500/30",
    year: "2026",
    role: "Automation Engineer",
    client: "Enterprise Supply Chain Gigs",
    duration: "3 weeks",
    stack: ["n8n", "OpenAI Chat Model", "Simple Memory Structures", "Google Sheets API", "Webhooks"],
    challenge:
      "Processing asynchronous client text commands for Bill of Materials (BOM) validation required manual stock cross-referencing and updates across disconnected storage tables.",
    solution:
      "Designed an automated n8n workflow triggered directly by conversational chat webhooks. The workflow passes text elements to an active OpenAI model with simple memory, processes conditional logic branches, scans multi-sheet datasets, and writes live material inventory deductions.",
    outcome:
      "Removed manual order verification latency entirely, building a continuous tracking cycle across digital spreadsheets.",
    highlights: [
      "Autonomous conversational branch filtering",
      "Complex multi-sheet lookup validation execution",
      "Live order modification callback confirmations",
    ],
    screenshot: "/ai-automation.png",
  },
  {
    slug: "wander-hub-ai",
    title: "Wander Hub AI",
    description:
      "An AI-powered smart travel platform designed to transform exploration by connecting travelers with curated tours, live AI translation, and intelligent assistance.",
    tags: ["React", "AI Chatbot", "TravelTech", "Tailwind CSS"],
    href: "#",
    live: false,
    gradient: "from-blue-400/40 via-sky-500/30 to-indigo-400/30",
    year: "2026",
    role: "Full-Stack Developer",
    client: "Professional Portfolio",
    duration: "2 months",
    stack: ["React", "Tailwind CSS", "Node.js", "AI APIs"],
    challenge:
      "Travelers often struggle with language barriers and fragmented itinerary planning when exploring new regions.",
    solution:
      "Built a comprehensive portal featuring a dedicated AI Translator & Chatbot for real-time travel guidance, alongside a dynamic package browsing system mapped by air and road routes. Implemented role-based login (User, Guider, Admin) to control platform access.",
    outcome:
      "Produced a scalable, user-centric travel ecosystem with built-in intelligent assistance and seamless booking workflows.",
    highlights: [
      "Real-time AI travel guidance and multi-language translation",
      "Role-based architecture (User, Guider, Admin)",
      "Dynamic tour package filtering and management",
    ],
    screenshot: "/wander-hub.jpg",
  },
  {
    slug: "odoo-hr-erp",
    title: "Odoo HR Management System",
    description:
      "A comprehensive ERP module customized for enterprise recruitment, applicant tracking, and automated payroll reporting.",
    tags: ["Odoo", "Python", "ERP", "PostgreSQL"],
    href: "#",
    live: false,
    gradient: "from-purple-600/40 via-pink-600/30 to-rose-600/30",
    year: "2026",
    role: "ERP Developer",
    client: "Professional Portfolio",
    duration: "3 months",
    stack: ["Odoo", "Python", "PostgreSQL", "XML", "QWeb"],
    challenge:
      "Standard HR processes lack cohesive tracking between applicant document submissions, interview stages, and final payroll/offer generation.",
    solution:
      "Customized Odoo's core modules to create a unified recruitment dashboard. Built features for parsing uploaded academic certificates and CNIC documents, tracking profile completion, and automatically generating formal PDF Offer Letters and Payroll Reports.",
    outcome:
      "Centralized the entire employee lifecycle into a single, secure, and highly trackable enterprise interface.",
    highlights: [
      "Custom applicant tracking and document upload portal",
      "Automated PDF generation for Offer Letters",
      "Dynamic Payroll and Attendance filtering reports",
    ],
    screenshot: "/odoo-erp.png",
  },
  {
    slug: "meal-hub",
    title: "Meal Hub",
    description:
      "A responsive restaurant deal aggregator and web-ordering platform featuring clean presentation layers and contextual user access points.",
    tags: ["HTML/CSS", "Python", "Flask", "DBMS"],
    href: "#",
    live: false,
    gradient: "from-orange-500/40 via-amber-500/30 to-yellow-500/30",
    year: "2025",
    role: "Full-Stack Developer",
    client: "E-Commerce Project",
    duration: "1 month",
    stack: ["HTML5", "CSS3", "Python", "Flask", "SQL / DBMS", "JavaScript"],
    challenge:
      "Food delivery consumers need focused promotional discovery layouts with zero-bloat tracking fields and crisp modal execution windows.",
    solution:
      "Developed a responsive merchant presentation shell built entirely on optimized HTML and CSS structures. Engineered backend access control mechanisms, user onboarding loops, and session-aware deal filtering.",
    outcome:
      "Delivered a fast layout featuring instant transitions between promotion maps and secure login screens.",
    highlights: [
      "Highly responsive food promotion card systems",
      "Secure credential access loops and middleware blocks",
      "Clean semantic markup prioritizing layout performance",
    ],
    screenshot: "/meal-hub.jpg",
  },
  {
    slug: "high-resolution-urdu-ocr",
    title: "High-Resolution Urdu OCR",
    description:
      "A specialized Optical Character Recognition model built to extract and process complex handwritten Urdu script using C++ data layers and PyTorch engines.",
    tags: ["Python", "C++", "PyTorch", "AI/ML"],
    href: "#",
    live: false,
    gradient: "from-indigo-500/40 via-blue-500/30 to-cyan-400/30",
    year: "2024",
    role: "Machine Learning Engineer",
    client: "Research Project",
    duration: "4 months",
    stack: ["Python", "C++", "PyTorch", "UTRNet", "Data Preprocessing Frameworks"],
    challenge:
      "Accurately extracting and recognizing unstructured, handwritten Urdu text—a notoriously complex script—poses significant machine learning challenges.",
    solution:
      "Engineered and trained a custom OCR model utilizing UTRNet and PyTorch, applying advanced text extraction and robust preprocessing techniques optimized via memory-efficient C++ text pipeline structures.",
    outcome:
      "Achieved high accuracy in extracting both printed and handwritten Urdu text formats.",
    highlights: ["UTRNet Implementation", "PyTorch Model Training", "High Accuracy Extraction"],
    screenshot: "/ocr.jpg",
  },
  {
    slug: "online-billing-system",
    title: "Online Billing System",
    description:
      "A fast, edge-optimized digital invoicing and billing web application designed for fast point-of-sale calculations.",
    tags: ["React", "Tailwind CSS", "Vite"],
    href: "https://online-billing-system-kappa.vercel.app/",
    live: true,
    gradient: "from-cyan-400/40 via-sky-500/30 to-emerald-400/30",
    year: "2026",
    role: "Frontend Developer",
    client: "Apexian Mart",
    duration: "4 weeks",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide React"],
    challenge:
      "Small retail setups need an intuitive billing interface that instantly computes product totals and outputs print-ready receipts without complex database overhead.",
    solution:
      "I built a clean, dynamic dashboard handling state-driven math for dynamic product additions, instant total updates, and automated date/time tracking with clear print actions.",
    outcome:
      "Achieved instantaneous calculation rendering and a clean, responsive layout built for actual store checkout speeds.",
    highlights: [
      "Dynamic state-driven product addition",
      "Instant invoice number tracking generation",
      "Print-ready CSS configurations built-in",
    ],
    screenshot: shot("https://online-billing-system-kappa.vercel.app/"),
  },
  {
    slug: "nexus-market",
    title: "NexusMarket",
    description:
      "A premium, feature-rich digital gaming marketplace built to securely trade in-game assets, currencies, and gift cards.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    href: "https://gaming-mvp.vercel.app/",
    live: true,
    gradient: "from-fuchsia-500/40 via-violet-500/30 to-cyan-400/30",
    year: "2025",
    role: "Lead Full-Stack & UI Developer",
    client: "NexusMarket Platform",
    duration: "2 months",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    challenge:
      "Digital gaming assets suffer from highly fragmented trust systems. Users needed an interface focusing on speed, secure paths, and immediate visual clarity across multi-category listings.",
    solution:
      "Designed a modern dark-to-light layout featuring custom product categories (Game Currency, Accounts, Boosting), live ratings, a 3-step checkout workflow representation, and smooth micro-interactions.",
    outcome:
      "Delivered a production-ready marketplace MVP showcasing premium branding elements and sub-second edge response times.",
    highlights: [
      "Multi-category product layout filtering",
      "Integrated responsive phone mockup previewer",
      "Smooth Framer Motion staggered grid loads",
    ],
    screenshot: shot("https://gaming-mvp.vercel.app/"),
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);