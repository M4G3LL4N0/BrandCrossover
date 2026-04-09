interface Feature {
  title: string;
  text: string;
}

interface Example {
  id: string;
  text: string;
}

export default function HomePage() {
  const features: Feature[] = [
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

  const examples: Example[] = [
    { id: "luxury-streetwear", text: "Luxury × streetwear capsule strategy" },
    { id: "hospitality-creator", text: "Hospitality × creator collab mapping" },
    { id: "retail-media", text: "Retail × media partnership discovery" },
  ];

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

      <section
        id="features"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 18,
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            className="card feature-card"
          >
            <h2
              style={{
                margin: 0,
                fontSize: 20,
                lineHeight: 1.2,
              }}
            >
              {feature.title}
            </h2>
            <p
              style={{
                marginTop: 12,
                marginBottom: 0,
                fontSize: 15,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              {feature.text}
            </p>
          </div>
        ))}
      </section>

      <section
        id="examples"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px 24px 80px",
        }}
      >
        <div
          className="card glow"
        >
          <h3
            style={{
              margin: 0,
              fontSize: 28,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Example crossover lanes
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 14,
              marginTop: 22,
            }}
          >
            {examples.map((example) => (
              <div
                key={example.id}
                className="card"
              >
                {example.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
