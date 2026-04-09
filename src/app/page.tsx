interface Feature {
  title: string;
  text: string;
}

interface Example {
  id: string;
  text: string;
}

interface HomePageProps {
  error?: Error;
  searchParams?: Record<string, string | string[] | undefined>;
}

const FEATURES: Feature[] = [
  {
    title: "Brand Match Discovery",
    text: "Find crossover opportunities between audiences, aesthetics, and commercial goals.",
  },
  {
    title: "Partnership Scoring",
    text: "Evaluate strategic fit, cultural alignment, and execution potential before outreach.",
  },
  {
    title: "Launch Planning",
    text: "Shape collaborations with clearer positioning, timing, and campaign structure.",
  },
];

const EXAMPLES: Example[] = [
  { id: "luxury-streetwear", text: "Luxury × streetwear capsule strategy" },
  { id: "hospitality-creator", text: "Hospitality × creator collab mapping" },
  { id: "retail-media", text: "Retail × media partnership discovery" },
];

export default function HomePage({ error }: HomePageProps) {
  if (error) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="mt-4 text-muted">{error.message}</p>
      </div>
    );
  }

  return (
    <main className="text-white">
      <section className="container py-16 lg:pb-24">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-foreground/12 bg-white/5 text-xs uppercase tracking-widest">
          BrandCrossover
        </div>

        <div
          className="max-w-4xl mt-7"
        >
          <h1
            className="m-0 text-[clamp(42px,7vw,88px)] leading-[0.95] tracking-tight"
          >
            Discover stronger brand partnerships before anyone else does.
          </h1>
          <p
            className="mt-6 max-w-3xl text-lg leading-relaxed text-muted"
          >
            BrandCrossover helps teams identify high-upside collaborations,
            score fit, and move from concept to launch with more confidence.
          </p>
        </div>

        <div className="flex flex-wrap gap-3.5 mt-8">
          <a href="#features" className="btn">
            Explore Features
          </a>
          <a href="#examples" className="btn btn-secondary">
            View Use Cases
          </a>
        </div>
      </section>

      <section id="features" className="max-w-[1200px] mx-auto px-6 pb-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4.5">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="card feature-card p-6">
            <h2 className="m-0 text-xl leading-[1.2]">
              {feature.title}
            </h2>
            <p className="mt-3 mb-0 text-[15px] leading-[1.7] text-white/72">
              {feature.text}
            </p>
          </div>
        ))}
      </section>

      <section id="examples" className="max-w-[1200px] mx-auto px-6 py-5 pb-20">
        <div className="card glow p-7">
          <h3 className="m-0 text-[28px] leading-[1.1] tracking-[-0.03em]">
            Example crossover lanes
          </h3>

          <div className="grid grid-cols-3 gap-3.5 mt-5.5">
            {EXAMPLES.map((example) => (
              <div key={example.id} className="card p-4.5 text-[15px] leading-[1.6]">
                {example.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
