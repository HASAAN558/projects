import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense, useState, type FormEvent } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles, Code2, Palette, Rocket, ExternalLink, Send, Check } from "lucide-react";
import { projects, type Project } from "@/lib/projects";
import { toast } from "sonner";

const Scene3D = lazy(() => import("@/components/Scene3D"));
const StarField = lazy(() => import("@/components/StarField"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quantix Nexus — Enterprise Infrastructure & AI Automation" },
      { name: "description", content: "Quantix Nexus is a premium technical agency specializing in custom ERP deployments, high-performance web applications, and autonomous AI systems." },
      { property: "og:title", content: "Quantix Nexus — Enterprise Infrastructure & AI Automation" },
      { property: "og:description", content: "Robust web systems, native applications, and intelligent workspace automation pipelines." },
    ],
  }),
  component: Portfolio,
});

const services = [
  { icon: Code2, title: "Web Engineering", desc: "Production-grade interfaces using HTML, CSS, Tailwind CSS, React, and Python systems." },
  { icon: Rocket, title: "ERP & Odoo Solutions", desc: "Tailoring enterprise resource architectures, data management trackers, and CRM systems." },
  { icon: Sparkles, title: "AI Workflow Systems", desc: "Automated business logic pipelines utilizing n8n, OpenAI models, and Gemini API scripts." },
  { icon: Palette, title: "Vision ML Systems", desc: "Developing dedicated deep learning text recognition models with PyTorch and custom OCR datasets." },
];

type Skill = { name: string; level: number };
const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "Core Programming & Web",
    items: [
      { name: "Python / C++", level: 90 },
      { name: "Java / C", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Enterprise & Frameworks",
    items: [
      { name: "Odoo / ERP Systems", level: 82 },
      { name: "Flask & Web APIs", level: 85 },
      { name: "Android (Java)", level: 86 },
      { name: "DBMS / PostgreSQL", level: 85 },
    ],
  },
  {
    title: "AI Automation & ML",
    items: [
      { name: "n8n Automation", level: 88 },
      { name: "Gemini & OpenAI APIs", level: 86 },
      { name: "PyTorch / OCR Engineering", level: 82 },
      { name: "Git / Source Architecture", level: 90 },
    ],
  },
];

const timeline = [
  {
    year: "Feb 2026 — Present",
    title: "Front-End Development Intern",
    place: "Developers Huub.co",
    desc: "Developing responsive web layouts using HTML, CSS, and Tailwind CSS while collaborating with design and backend teams for seamless UI/UX integration.",
  },
  {
    year: "Jun 2025",
    title: "Data Analytics Virtual Experience",
    place: "Deloitte",
    desc: "Interpreted and visualized complex datasets for business insights, identified trends, and delivered actionable recommendations.",
  },
  {
    year: "2025",
    title: "Volunteer in Service (VIS)",
    place: "Community Work",
    desc: "Participated in smog awareness campaigns and tree plantation drives. Attended a blood donation awareness seminar and promoted the cause on social media.",
  },
  {
    year: "2022 — 2026",
    title: "B.S. Computer Science",
    place: "University of Central Punjab",
    desc: "Built a strong foundation in software engineering, full-stack development, algorithms, and artificial intelligence.",
  },
];

function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Suspense fallback={null}><StarField /></Suspense>

      {/* Gradient backdrop */}
      <div className="fixed inset-0 -z-20" style={{ background: "var(--gradient-hero)" }} />
      <div className="fixed inset-0 -z-20 bg-background" />

      <Nav />

      {/* AGENCY HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 pt-32 pb-20 max-w-6xl mx-auto">
        {/* Subtle 3D Background specifically for the centered hero */}
        <div className="absolute inset-0 -z-10 opacity-40 pointer-events-none flex items-center justify-center">
          <Suspense fallback={null}><Scene3D /></Suspense>
        </div>

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 flex flex-col items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm"
          >
            <span className="flex size-2 rounded-full bg-primary mr-2 animate-glow-pulse" />
            Accepting new enterprise clients
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-foreground leading-[1.05]"
          >
            We engineer <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              digital infrastructure.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Quantix Nexus is a premium technical agency specializing in custom ERP deployments, high-performance web applications, and autonomous AI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a href="#work" className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              View Our Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-card">
              Partner With Us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-sm text-muted-foreground"
          >
            <Stat value="Python/C++" label="Core Systems" />
            <Stat value="Odoo/ERP" label="Architecture" />
            <Stat value="n8n/AI" label="Automation" />
          </motion.div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 md:px-12 py-32 bg-card/10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="What we do" title={<>Streamlining infrastructure with <span className="text-gradient">intelligent</span> design.</>} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass glow-border rounded-2xl p-8 group hover:-translate-y-1 transition-transform"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK / FEATURED DEPLOYMENTS */}
      <section id="work" className="relative px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Featured Deployments"
            title={<>Enterprise systems built by <span className="text-gradient">Quantix Nexus</span>.</>}
            right={<p className="text-sm text-muted-foreground max-w-xs">An overview of live web systems, data prediction apps, machine vision classifiers, and autonomous agent workflows.</p>}
          />
          {/* Agency layout: larger gaps between project cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mt-20">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT THE AGENCY */}
      <section id="about" className="relative px-6 md:px-12 py-32 bg-card/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-2">
            {/* Dark, premium gradient background */}
            <div className="aspect-square rounded-3xl relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#1e1345] to-[#08182b] border border-white/5 shadow-2xl group">
              
              {/* Subtle cyan background glow in the center */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_65%)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Dashed Tech Ring (Slow Spin) */}
                <div className="absolute size-[85%] rounded-full border-[1.5px] border-dashed border-cyan-500/20 animate-[spin_60s_linear_infinite]" />
                
                {/* Inner Dashed Tech Ring (Reverse Slow Spin) */}
                <div className="absolute size-[65%] rounded-full border border-dashed border-cyan-400/30 animate-[spin_40s_linear_infinite_reverse]" />
                
                {/* The Interlocking QN Logo */}
                <div className="relative font-black tracking-tighter select-none z-10 flex items-center justify-center drop-shadow-[0_0_30px_rgba(0,195,255,0.3)] group-hover:scale-105 transition-transform duration-700">
                  {/* The large 'Q' */}
                  <span className="text-[100px] lg:text-[130px] leading-none bg-gradient-to-b from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Q
                  </span>
                  {/* The interlocking 'N' */}
                  <span className="absolute -bottom-2 -right-2 text-[55px] lg:text-[70px] leading-none bg-gradient-to-t from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                    N
                  </span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm uppercase tracking-widest text-primary mb-4">About the agency</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Bridging corporate efficiency with <span className="text-gradient">autonomous systems.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              As an engineering firm based in Lahore, we deploy clean solutions across complex environments. Whether writing custom logic filters in C++ or Python, managing database schemes, or tuning vision models, our goal is to build secure and highly performant architectures for modern enterprises.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["Python", "C++", "Odoo", "ERP", "n8n", "PyTorch", "React", "PostgreSQL"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full glass border border-border/50 text-sm font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Capabilities"
            title={<>The <span className="text-gradient">infrastructure</span> we leverage.</>}
            right={<p className="text-sm text-muted-foreground max-w-xs">Languages, automated services, and resource architectures we rely on to execute programmatic enterprise builds.</p>}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass glow-border rounded-3xl p-8"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{g.title}</p>
                <div className="mt-8 space-y-6">
                  {g.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-3">
                        <span className="font-semibold text-foreground">{s.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-card overflow-hidden border border-border/50">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="relative px-6 md:px-12 py-32 bg-card/10">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Foundation"
            title={<>Our technical and <span className="text-gradient">academic</span> history.</>}
          />
          <ol className="relative mt-20 border-l border-border/60 ml-3 space-y-12">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year + t.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="pl-10 relative"
              >
                <span className="absolute -left-[7px] top-2 size-3 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]" />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-sm font-semibold text-primary">{t.year}</span>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{t.title}</h3>
                  <span className="text-sm font-medium text-muted-foreground">· {t.place}</span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-3xl">{t.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 md:px-12 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Let's connect</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.05]">
              Ready to automate <span className="text-gradient">your enterprise?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              Drop a brief description of your technical challenges, backend bottlenecks, or ERP goals. We build systems that scale.
            </p>
            <a href="mailto:scientisthasaan@gmail.com"
              className="mt-10 inline-flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors">
              <Mail className="size-5" /> scientisthasaan@gmail.com
            </a>
            <div className="mt-10 flex gap-4">
              <SocialLink icon={Github} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Mail} href="mailto:scientisthasaan@gmail.com" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="relative px-6 md:px-12 py-12 border-t border-border/50 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-extrabold tracking-tighter text-foreground">
            Quantix<span className="text-primary">Nexus</span>
          </span>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Quantix Nexus. All rights reserved.</p>
            <p className="font-mono text-xs hidden md:block">Lahore, Pakistan</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-extrabold tracking-tighter text-lg">
          <span className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground text-xs">QN</span>
          Quantix Nexus
        </a>
        <nav className="hidden md:flex items-center gap-2 glass rounded-full px-3 py-2 text-sm font-medium border border-border/50">
          {[["Work", "#work"], ["Capabilities", "#skills"], ["Agency", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} className="px-4 py-1.5 rounded-full hover:bg-card transition-colors text-muted-foreground hover:text-foreground">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-semibold text-background hover:scale-105 transition-all">
          Partner With Us <ArrowUpRight className="size-3.5" />
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden glass rounded-full p-2.5">
          <div className="size-4 flex flex-col justify-center gap-1.5">
            <span className="h-0.5 bg-foreground rounded" />
            <span className="h-0.5 bg-foreground rounded w-3/4" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-3 glass rounded-2xl p-4 flex flex-col gap-2 text-sm border border-border/50 shadow-xl shadow-black/20">
          {[["Work", "#work"], ["Capabilities", "#skills"], ["Agency", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="px-4 py-3 rounded-xl font-medium hover:bg-card">{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function SectionHeader({ eyebrow, title, right }: { eyebrow: string; title: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-border/50 pb-8">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{eyebrow}</p>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] max-w-2xl">{title}</h2>
      </div>
      {right}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl font-extrabold text-foreground tracking-tight">{value}</div>
      <div className="text-xs font-semibold uppercase tracking-widest mt-2 text-muted-foreground">{label}</div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group relative flex flex-col rounded-3xl border border-border/50 bg-card/20 p-5 transition-all hover:bg-card/50 hover:border-border overflow-hidden"
      >
        <div className={`absolute -top-32 -right-32 size-72 rounded-full bg-gradient-to-br ${project.gradient} blur-[100px] opacity-30 group-hover:opacity-60 transition-opacity duration-700`} />

        {/* Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-950 border border-border/50 shadow-inner">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
          
          {/* Note: If you updated to screenshots array in projects.ts, use project.screenshots[0] here */}
          {/* Using project.screenshot below to match your provided interface structure */}
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} preview`}
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700"
            />
          ) : (
            <>
              <div className="absolute inset-0 backdrop-blur-2xl bg-background/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-bold text-gradient opacity-90 group-hover:scale-110 transition-transform duration-700 tracking-tighter">
                  {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
              </div>
            </>
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-grow pt-8 px-2 pb-2 z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold font-mono text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {project.category || "Case Study"}
            </span>
            <div className="flex items-center gap-3">
              {project.live && (
                <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
                </span>
              )}
              <span className="text-xs font-medium text-muted-foreground">{project.year}</span>
            </div>
          </div>
          
          <h3 className="text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((t) => (
              <span key={t} className="text-xs font-medium px-3 py-1.5 rounded-full border border-border/50 bg-background text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SocialLink({ icon: Icon, href }: { icon: typeof Github; href: string }) {
  return (
    <a href={href} className="glass border border-border/50 size-14 rounded-full flex items-center justify-center hover:bg-card hover:border-border transition-all hover:-translate-y-1">
      <Icon className="size-5 text-foreground" />
    </a>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || name.length > 100) return toast.error("Please enter your name (max 100 chars).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return toast.error("Please enter a valid email.");
    if (!message || message.length > 1000) return toast.error("Message is required (max 1000 chars).");

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone(true);
    form.reset();
    toast.success("Message sent — We'll reply within 24 hours.");
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="glass rounded-3xl p-8 md:p-10 space-y-6 border border-border/50 shadow-2xl shadow-black/20"
    >
      <div>
        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name / Company</label>
        <input
          id="name" name="name" type="text" required maxLength={100}
          placeholder="Acme Corp"
          className="mt-3 w-full bg-background border border-border/50 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-inner"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Work Email</label>
        <input
          id="email" name="email" type="email" required maxLength={255}
          placeholder="you@company.com"
          className="mt-3 w-full bg-background border border-border/50 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all shadow-inner"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Project Brief</label>
        <textarea
          id="message" name="message" required maxLength={1000} rows={5}
          placeholder="Tell us about your infrastructure goals, timelines, and technical requirements."
          className="mt-3 w-full bg-background border border-border/50 rounded-xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all resize-none shadow-inner"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="group w-full inline-flex items-center justify-center gap-3 rounded-xl bg-foreground px-6 py-4 text-background font-bold hover:scale-[1.02] transition-all disabled:opacity-60 disabled:hover:scale-100"
      >
        {done ? (<><Check className="size-5" /> Request Received</>) : submitting ? "Processing…" : (<>Submit Brief <Send className="size-4 transition-transform group-hover:translate-x-1" /></>)}
      </button>
    </motion.form>
  );
}