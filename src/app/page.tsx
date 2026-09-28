import { WaitlistForm } from "@/components/WaitlistForm";
import { IntakeForm } from "@/components/IntakeForm";

const STEPS = [
  {
    title: "Discover",
    text: "Surface profitable crossover lanes across categories, audiences, and retail contexts.",
  },
  {
    title: "Score",
    text: "Rank fit, feasibility, and commercial upside before you spend time on outreach.",
  },
  {
    title: "Launch",
    text: "Turn the best ideas into launch-ready positioning, partner paths, and next steps.",
  },
];

const EXAMPLES = [
  {
    id: "candy-popcorn",
    headline: "Nostalgic candy × premium popcorn",
    detail: "Comfort-memory flavor equity carried into a high-velocity snack format.",
  },
  {
    id: "rtd-tea-bakery",
    headline: "RTD tea × bakery collaboration",
    detail: "Cross-daypart retail adjacency with shared health-permissible indulgence cues.",
  },
  {
    id: "heritage-spice-chips",
    headline: "Heritage spice brand × better-for-you chips",
    detail: "Distinctive taste IP applied to a category with strong impulse and repeat.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="container py-16 lg:pb-20">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-foreground/12 bg-white/5 text-xs uppercase tracking-widest">
          Early Access · BrandCrossover
        </div>

        <div className="max-w-4xl mt-7">
          <h1 className="m-0 text-[clamp(38px,6.5vw,84px)] leading-[0.95] tracking-tight">
            Discover, score, and launch profitable brand collaborations.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            BrandCrossover is the intelligence layer for brand-to-brand product expansion—mapping
            adjacencies, scoring crossover upside, and capturing demand from CPG, beverage,
            retail, and licensing teams.
          </p>
        </div>

        <div className="flex flex-wrap gap-3.5 mt-9">
          <a href="#intake" className="btn">
            Submit your brand
          </a>
          <a href="/report-demo" className="btn btn-secondary">
            View sample crossover report
          </a>
          <a href="#waitlist" className="btn btn-secondary">
            Join waitlist
          </a>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pb-14">
        <div className="card glow p-8 lg:p-10">
          <p className="text-sm uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            Sample report excerpt · not a live deal
          </p>
          <h2 className="section-title mt-3 mb-0">Nostalgic caramel candy × premium popcorn</h2>
          <p className="section-copy mt-3 max-w-3xl">
            The same pairing as the /report-demo page: comfort-memory flavor equity
            in a high-velocity snack shell. Scores are illustrative so a brand team
            can see the shape of a crossover brief before submitting intake.
          </p>
          <div
            className="mt-8 grid gap-4"
            style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }}
          >
            {[
              ["Brand fit", "92"],
              ["Profitability", "88"],
              ["Feasibility", "94"],
              ["Cultural relevance", "90"],
            ].map(([label, value]) => (
              <div key={label} className="card p-5">
                <div className="text-sm uppercase tracking-wider" style={{ color: "rgba(234,242,255,0.56)" }}>
                  {label}
                </div>
                <div className="mt-2 text-3xl font-bold">{value}</div>
              </div>
            ))}
          </div>
          <p className="section-copy mt-6 mb-0 max-w-3xl">
            Risks called on the full report: coating logistics vs shelf life,
            premium price vs mainstream caramel popcorn, and seasonality. Next
            steps there are copack shortlist, pilot SKU, and trademark path —
            planning copy, not a signed collaboration.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 pb-14">
        <div className="card glow p-8 lg:p-10">
          <h2 className="section-title m-0">Example opportunities</h2>
          <p className="section-copy mt-3 max-w-3xl">
            Concrete adjacency patterns—not generic “collab ideas.” Think legacy caramel equity
            meeting premium popcorn, or heritage flavors entering better-for-you formats.
          </p>
          <div className="grid gap-4 mt-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {EXAMPLES.map((ex) => (
              <div key={ex.id} className="card p-5">
                <div className="text-sm uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                  Crossover lane
                </div>
                <h3 className="mt-2 mb-2 text-xl font-bold">{ex.headline}</h3>
                <p className="m-0 text-[15px] leading-relaxed" style={{ color: "rgba(234,242,255,0.72)" }}>
                  {ex.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="max-w-[1200px] mx-auto px-6 pb-14">
        <h2 className="section-title">How it works</h2>
        <p className="section-copy mt-3 max-w-2xl">
          From signal to shelf: prioritize where your brand can credibly stretch, who makes sense
          as a partner, and what a launch motion looks like.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4.5 mt-8">
          {STEPS.map((step, i) => (
            <div key={step.title} className="card feature-card p-6">
              <div className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="m-0 mt-3 text-xl leading-[1.2]">{step.title}</h3>
              <p className="mt-3 mb-0 text-[15px] leading-[1.7]" style={{ color: "rgba(234,242,255,0.72)" }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="max-w-[1200px] mx-auto px-6 pb-14">
        <div className="card glow p-8 lg:p-10">
          <h2 className="section-title m-0">Waitlist</h2>
          <p className="section-copy mt-3 max-w-2xl">
            Get early access as we expand scoring models, partner graphs, and paid crossover reports.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section id="intake" className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="card glow p-8 lg:p-10">
          <h2 className="section-title m-0">Brand intake</h2>
          <p className="section-copy mt-3 max-w-2xl">
            Tell us about your brand and goals. We use this to prioritize crossover lanes and
            outreach—starting with manual review and evolving into automated scoring.
          </p>
          <div className="mt-8">
            <IntakeForm />
          </div>
        </div>
      </section>
    </div>
  );
}
