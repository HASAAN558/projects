import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Check } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Case Study | Alex Morgan` : "Project — Alex Morgan";
    const desc = p?.description ?? "Project case study";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(p?.screenshot ? [{ property: "og:image", content: p.screenshot }] : []),
      ],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm uppercase tracking-widest text-primary mb-3">404</p>
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="size-4" /> Back home
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground mt-3">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-primary px-5 py-2 text-primary-foreground">Try again</button>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData() as { project: import("@/lib/projects").Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-20" style={{ background: "var(--gradient-hero)" }} />
      <div className="fixed inset-0 -z-20 bg-background" />

      {/* Top bar */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 md:px-12 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm hover:bg-card transition-colors">
            <ArrowLeft className="size-4" /> Back
          </Link>
          {p.live && (
            <a href={p.href} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all">
              Visit live <ExternalLink className="size-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-12 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 text-xs">
            <span className="font-mono text-muted-foreground">{p.year}</span>
            <span className="size-1 rounded-full bg-muted-foreground/40" />
            <span className="text-muted-foreground">{p.client}</span>
            {p.live && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
                <span className="size-1.5 rounded-full bg-primary animate-glow-pulse" /> Live
              </span>
            )}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1]">
            {p.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            {p.description}
          </motion.p>
        </div>
      </section>

      {/* Screenshot / Visual */}
      <section className="relative px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[16/10] rounded-3xl glass glow-border overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
            {p.screenshot ? (
              <img src={p.screenshot} alt={`${p.title} screenshot`} loading="lazy"
                className="absolute inset-0 size-full object-cover object-top" />
            ) : (
              <>
                <div className="absolute inset-0 backdrop-blur-2xl bg-background/30" />
                <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-9xl font-bold text-gradient">
                  {p.title.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Meta grid */}
      <section className="relative px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { k: "Role", v: p.role },
            { k: "Client", v: p.client },
            { k: "Year", v: p.year },
            { k: "Duration", v: p.duration },
          ].map((m) => (
            <div key={m.k} className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{m.k}</p>
              <p className="mt-2 font-semibold">{m.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case study body */}
      <section className="relative px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-10">
            {[
              { h: "The challenge", b: p.challenge },
              { h: "The approach", b: p.solution },
              { h: "The outcome", b: p.outcome },
            ].map((s) => (
              <div key={s.h}>
                <p className="text-sm uppercase tracking-widest text-primary mb-3">{s.h}</p>
                <p className="text-lg text-foreground/90 leading-relaxed">{s.b}</p>
              </div>
            ))}

            <div>
              <p className="text-sm uppercase tracking-widest text-primary mb-4">Highlights</p>
              <ul className="space-y-3">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <Check className="size-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="md:col-span-1">
            <div className="glass glow-border rounded-2xl p-6 sticky top-28">
              <p className="text-sm uppercase tracking-widest text-primary mb-4">Tech stack</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              {p.live && (
                <a href={p.href} target="_blank" rel="noreferrer"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:shadow-[var(--shadow-glow)] transition-all">
                  Visit live site <ExternalLink className="size-3.5" />
                </a>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Next */}
      <section className="relative px-6 md:px-12 py-20 border-t border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Next project</p>
          <Link to="/projects/$slug" params={{ slug: next.slug }}
            className="group inline-flex items-center gap-3 text-2xl md:text-4xl font-bold tracking-tight hover:text-primary transition-colors">
            {next.title} <ArrowUpRight className="size-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}
