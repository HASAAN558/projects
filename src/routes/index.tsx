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
      { title: "Hasaan Mehmood — Full-Stack & AI Automation Engineer" },
      { name: "description", content: "Portfolio of Hasaan Mehmood, specialized in Full-Stack development, AI workflow automation, and custom ML solutions." },
      { property: "og:title", content: "Hasaan Mehmood — Full-Stack & AI Automation Engineer" },
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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-24">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 text-sm"
          >
            <span className="size-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="text-muted-foreground">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]"
          >
            Engineering <span className="text-gradient">automated</span>
            <br />digital backbones.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            I'm Hasaan — a software engineer combining robust full-stack languages like Python and C++ with Odoo ERP structures and custom AI agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all">
              View selected work <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="#contact" className="glass glow-border inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium hover:bg-card transition-all">
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}
            className="mt-16 flex items-center gap-8 text-sm text-muted-foreground"
          >
            <Stat value="Python/C++" label="Core System" />
            <Stat value="Odoo/ERP" label="Architecture" />
            <Stat value="n8n/AI" label="Automation" />
          </motion.div>
        </motion.div>

        {/* 3D scene on the right */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
          <Suspense fallback={null}><Scene3D /></Suspense>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground tracking-widest uppercase"
        >
          Scroll
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="relative px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader eyebrow="What I do" title={<>Streamlining infrastructure with <span className="text-gradient">intelligent</span> design.</>} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass glow-border rounded-2xl p-6 group hover:-translate-y-1 transition-transform"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="relative px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Selected work"
            title={<>Recent <span className="text-gradient">projects</span> & system architectures.</>}
            right={<p className="text-sm text-muted-foreground max-w-xs">An overview of live web systems, data prediction apps, machine vision classifiers, and autonomous agent workflows.</p>}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 md:px-12 py-32">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="aspect-square rounded-3xl glass glow-border relative overflow-hidden animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-gradient">HM</div>
            </div>
          </div>
          <div className="md:col-span-3">
            <p className="text-sm uppercase tracking-widest text-primary mb-4">About me</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Bridging corporate efficiency with <span className="text-gradient">autonomous systems.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              As a full-stack engineer and automation developer based in Lahore, I deploy clean solutions across complex environments. Whether writing custom logic filters in C++ or Python, managing database schemes, or tuning vision models, my goal is to build secure and highly performant architectures.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-xs">
              {["Python", "C++", "Odoo", "ERP", "n8n", "PyTorch", "HTML/CSS", "PostgreSQL"].map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full glass text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="relative px-6 md:px-12 py-32">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Skills"
            title={<>The <span className="text-gradient">toolkit</span> I reach for.</>}
            right={<p className="text-sm text-muted-foreground max-w-xs">Languages, automated services, and resource architectures I rely on to execute programmatic builds.</p>}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
            {skillGroups.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass glow-border rounded-2xl p-6"
              >
                <p className="text-xs uppercase tracking-widest text-primary">{g.title}</p>
                <div className="mt-5 space-y-4">
                  {g.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-card overflow-hidden">
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
      <section id="timeline" className="relative px-6 md:px-12 py-32">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            eyebrow="Timeline"
            title={<>My technical and <span className="text-gradient">academic</span> history.</>}
          />
          <ol className="relative mt-16 border-l border-border/60 ml-3 space-y-10">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year + t.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="pl-8 relative"
              >
                <span className="absolute -left-[7px] top-2 size-3 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary))]" />
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-xs text-primary">{t.year}</span>
                  <h3 className="text-xl font-semibold">{t.title}</h3>
                  <span className="text-sm text-muted-foreground">· {t.place}</span>
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed">{t.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-6 md:px-12 py-32">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary mb-4">Let's connect</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1]">
              Ready to automate <span className="text-gradient">your workspace?</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Drop a brief description of your technical challenges, backend bottlenecks, or layout goals.
            </p>
            <a href="mailto:hassayking5@gmail.com"
              className="mt-8 inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <Mail className="size-4" /> hassayking5@gmail.com
            </a>
            <div className="mt-8 flex gap-3">
              <SocialLink icon={Github} href="#" />
              <SocialLink icon={Linkedin} href="#" />
              <SocialLink icon={Mail} href="mailto:hassayking5@gmail.com" />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="relative px-6 md:px-12 py-10 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Hasaan Mehmood. Crafted with care.</p>
          <p className="font-mono text-xs">Lahore, Pakistan</p>
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
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="size-7 rounded-lg bg-gradient-to-br from-primary to-accent" />
          Hasaan Mehmood
        </a>
        <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5 text-sm">
          {[["Work", "#work"], ["Skills", "#skills"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} className="px-4 py-1.5 rounded-full hover:bg-card transition-colors text-muted-foreground hover:text-foreground">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all">
          Hire me <ArrowUpRight className="size-3.5" />
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden glass rounded-full p-2.5">
          <div className="size-4 flex flex-col justify-center gap-1">
            <span className="h-0.5 bg-foreground rounded" />
            <span className="h-0.5 bg-foreground rounded w-3/4" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden mt-3 glass rounded-2xl p-4 flex flex-col gap-2 text-sm">
          {[["Work", "#work"], ["Skills", "#skills"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-card">{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function SectionHeader({ eyebrow, title, right }: { eyebrow: string; title: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <p className="text-sm uppercase tracking-widest text-primary mb-4">{eyebrow}</p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] max-w-2xl">{title}</h2>
      </div>
      {right}
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-xs uppercase tracking-wider mt-1">{label}</div>
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
        className="group relative block glass glow-border rounded-3xl p-6 md:p-8 overflow-hidden hover:-translate-y-1 transition-transform"
      >
      <div className={`absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`} />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
            {project.live && (
              <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" /> Live
              </span>
            )}
            <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
          </div>
          <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>

        <div className="mt-6 aspect-[16/10] rounded-2xl bg-card/60 border border-border overflow-hidden relative">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} preview`}
              loading="lazy"
              className="absolute inset-0 size-full object-cover object-top opacity-90 group-hover:scale-[1.03] transition-transform duration-700"
            />
          ) : (
            <>
              <div className="absolute inset-0 backdrop-blur-2xl bg-background/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-5xl md:text-6xl font-bold text-gradient opacity-90 group-hover:scale-110 transition-transform duration-700">
                  {project.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
              </div>
            </>
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/80 to-transparent" />
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
            {project.live && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label="Open live site"
                className="shrink-0 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Live <ExternalLink className="size-3.5" />
              </a>
            )}
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full border border-border text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </div>
      </Link>
    </motion.div>
  );
}

function SocialLink({ icon: Icon, href }: { icon: typeof Github; href: string }) {
  return (
    <a href={href} className="glass glow-border size-12 rounded-full flex items-center justify-center hover:bg-card transition-all hover:-translate-y-0.5">
      <Icon className="size-5" />
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
    toast.success("Message sent — I'll reply within 48 hours.");
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="glass glow-border rounded-3xl p-6 md:p-8 space-y-5"
    >
      <div>
        <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
        <input
          id="name" name="name" type="text" required maxLength={100}
          placeholder="Your full name"
          className="mt-2 w-full bg-card/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
        <input
          id="email" name="email" type="email" required maxLength={255}
          placeholder="you@company.com"
          className="mt-2 w-full bg-card/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">Project brief</label>
        <textarea
          id="message" name="message" required maxLength={1000} rows={5}
          placeholder="Tell me a bit about the project, timeline and goals."
          className="mt-2 w-full bg-card/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-primary-foreground font-medium hover:shadow-[var(--shadow-glow)] transition-all disabled:opacity-60"
      >
        {done ? (<><Check className="size-4" /> Sent</>) : submitting ? "Sending…" : (<>Send message <Send className="size-4 transition-transform group-hover:translate-x-0.5" /></>)}
      </button>
    </motion.form>
  );
}