export default function HomePage() {
  const features = [
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

  const examples = [
    "Luxury × streetwear capsule strategy",
    "Hospitality × creator collab mapping",
    "Retail × media partnership discovery",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 28%), linear-gradient(180deg, #0b0b0f 0%, #111119 100%)",
        color: "#ffffff",
      }}
    >
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "88px 24px 56px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 14px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          BrandCrossover
        </div>

        <div
          style={{
            marginTop: 28,
            maxWidth: 860,
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 7vw, 88px)",
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
            }}
          >
            Discover stronger brand partnerships before anyone else does.
          </h1>
          <p
            style={{
              marginTop: 24,
              maxWidth: 720,
              fontSize: 18,
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)",
            }}
          >
            BrandCrossover helps teams identify high-upside collaborations,
            score fit, and move from concept to launch with more confidence.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            marginTop: 32,
          }}
        >
          <a
            href="#features"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 22px",
              borderRadius: 14,
              background: "#ffffff",
              color: "#0b0b0f",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Explore Features
          </a>
          <a
            href="#examples"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 22px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.03)",
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
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
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 18,
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.title}
            style={{
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              padding: 24,
              boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
            }}
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
          style={{
            borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.04)",
            padding: 28,
          }}
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
            {examples.map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  padding: 18,
                  fontSize: 15,
                  lineHeight: 1.6,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
