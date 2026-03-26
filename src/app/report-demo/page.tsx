export default function ReportDemo() {
  return (
    <main className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
      <h1 className="section-title">Sample Crossover Report</h1>

      <div className="card glow" style={{ padding: 24, marginTop: 20 }}>
        <h2 style={{ marginTop: 0 }}>
          Werther’s Style Candy × Premium Popcorn Brand
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 20 }}>
          {[
            ["Brand Fit", "92"],
            ["Profitability", "88"],
            ["Feasibility", "94"],
            ["Cultural Relevance", "90"],
          ].map(([label, value]) => (
            <div key={label} className="card" style={{ padding: 16 }}>
              <div style={{ color: "#9eb1cc" }}>{label}</div>
              <div style={{ fontSize: 28, fontWeight: 800 }}>{value}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <h3>Opportunity Summary</h3>
          <p style={{ color: "#9eb1cc" }}>
            This crossover leverages nostalgic flavor equity and transforms it into a
            high-margin snack category with strong retail compatibility.
          </p>
        </div>

        <div style={{ marginTop: 24 }}>
          <h3>Why It Works</h3>
          <ul>
            <li>Shared emotional memory (comfort / nostalgia)</li>
            <li>Impulse purchase category</li>
            <li>Strong seasonal sales spikes</li>
            <li>High retail shelf visibility</li>
          </ul>
        </div>

        <div style={{ marginTop: 24 }}>
          <h3>Next Steps</h3>
          <ul>
            <li>Identify 3 target popcorn manufacturers</li>
            <li>Develop pilot flavor SKU</li>
            <li>Test limited retail drop</li>
          </ul>
        </div>

        <a href="/" className="btn" style={{ marginTop: 20 }}>
          Back to Home
        </a>
      </div>
    </main>
  );
}
