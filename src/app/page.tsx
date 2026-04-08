"use client";

import { useState } from "react";
import {
  ApiState,
  WaitlistForm,
  IntakeForm,
  initialState,
  handleApiRequest
} from "@/lib/api";

export default function HomePage() {
  const [waitlist, setWaitlist] = useState<ApiState>(initialState);
  const [intake, setIntake] = useState<ApiState>(initialState);

  async function handleWaitlist(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();

    if (!name || !email) {
      setWaitlist({
        loading: false,
        success: "",
        error: "Name and email are required",
      });
      return;
    }

    const payload: WaitlistForm = { name, email, company };
    await handleApiRequest("/api/waitlist", payload, setWaitlist);
  }

  async function handleIntake(formData: FormData) {
    const full_name = String(formData.get("full_name") || "").trim();
    const work_email = String(formData.get("work_email") || "").trim();
    const brand_name = String(formData.get("brand_name") || "").trim();
    const category = String(formData.get("category") || "").trim();
    const goals = String(formData.get("goals") || "").trim();

    if (!full_name || !work_email || !brand_name || !category || !goals) {
      setIntake({
        loading: false,
        success: "",
        error: "All required fields must be filled",
      });
      return;
    }

    const payload: IntakeForm = {
      full_name,
      work_email,
      brand_name,
      website_url: String(formData.get("website_url") || "").trim(),
      category,
      goals,
      dream_partners: String(formData.get("dream_partners") || "").trim(),
    };
    
    await handleApiRequest("/api/intake", payload, setIntake);
  }

  return (
    <main>
      <section className="container" style={{ paddingTop: 28, paddingBottom: 44 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontWeight: 800, letterSpacing: "-0.04em", fontSize: 24 }}>
            BrandCrossover
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#waitlist" className="btn btn-secondary">
              Join Waitlist
            </a>
            <a href="#intake" className="btn">
              Submit Brand
            </a>
            <a href="/report-demo" className="btn btn-secondary">
              View Sample Report
            </a>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 44, paddingBottom: 40 }}>
        <div className="card glow" style={{ padding: 28, overflow: "hidden" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.8fr",
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "8px 12px",
                  color: "#b8c9df",
                  fontSize: 13,
                  marginBottom: 18,
                }}
              >
                Discover • Score • Launch
              </div>

              <h1 className="section-title" style={{ margin: 0, maxWidth: 740 }}>
                Discover the most profitable brand crossovers before everyone else.
              </h1>

              <p className="section-copy" style={{ maxWidth: 720, marginTop: 18 }}>
                BrandCrossover helps brands identify high-potential collaborations,
                adjacent products, and new revenue opportunities across food, beverage,
                lifestyle, creators, hospitality, beauty, and beyond.
              </p>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 22 }}>
                <a href="#intake" className="btn">
                  Get a Crossover Report
                </a>
                <a href="#features" className="btn btn-secondary">
                  See How It Works
                </a>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                  gap: 14,
                  marginTop: 28,
                }}
              >
                {[
                  [
                    "Adjacency Intelligence",
                    "Find where your brand can credibly win next.",
                  ],
                  [
                    "Partner Discovery",
                    "Identify brands with real audience overlap.",
                  ],
                  [
                    "Launch Readiness",
                    "Prioritize ideas by feasibility and margin logic.",
                  ],
                ].map(([title, copy]) => (
                  <div key={title} className="card" style={{ padding: 18 }}>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>{title}</div>
                    <div style={{ color: "#9eb1cc", lineHeight: 1.55 }}>{copy}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 22 }}>
              <div style={{ fontSize: 14, color: "#b7c7dd", marginBottom: 12 }}>
                Example opportunity
              </div>

              <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.04em" }}>
                Nostalgic Candy Brand × Premium Popcorn
              </div>

              <div style={{ color: "#9eb1cc", lineHeight: 1.7, marginTop: 14 }}>
                Recommendation signal:
              </div>

              <ul style={{ color: "#dce7f6", lineHeight: 1.8, paddingLeft: 18 }}>
                <li>Shared taste-memory and comfort positioning</li>
                <li>High impulse-buy potential</li>
                <li>Strong seasonal and gifting fit</li>
                <li>Retail-ready with low consumer education needed</li>
                <li>High PR and shelf novelty without feeling random</li>
              </ul>

              <div
                className="card"
                style={{
                  padding: 16,
                  marginTop: 16,
                  borderColor: "rgba(124, 199, 255, 0.25)",
                }}
              >
                <div style={{ color: "#8fcfff", fontWeight: 700 }}>Crossover score</div>
                <div style={{ fontSize: 42, fontWeight: 900, marginTop: 6 }}>
                  91 / 100
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container" style={{ paddingTop: 28, paddingBottom: 28 }}>
        <div style={{ maxWidth: 760 }}>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            How it works
          </h2>
          <p className="section-copy">
            Start with a brand. BrandCrossover maps adjacent categories, likely partner
            brands, and collaboration concepts, then helps you prioritize what has the
            strongest fit, margin potential, and cultural relevance.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
            gap: 16,
            marginTop: 22,
          }}
        >
          {[
            [
              "01",
              "Input your brand",
              "Tell us your category, products, goals, and dream partners.",
            ],
            [
              "02",
              "Surface adjacencies",
              "We identify natural extensions and collaboration vectors.",
            ],
            [
              "03",
              "Score opportunities",
              "We rank ideas by fit, feasibility, novelty, and revenue logic.",
            ],
            [
              "04",
              "Launch the best one",
              "Turn the strongest concept into a report, intro, or execution plan.",
            ],
          ].map(([n, title, copy]) => (
            <div key={n} className="card" style={{ padding: 20 }}>
              <div style={{ color: "#8fcfff", fontWeight: 800, fontSize: 14 }}>{n}</div>
              <div style={{ marginTop: 8, fontWeight: 700, fontSize: 18 }}>{title}</div>
              <div style={{ color: "#9eb1cc", lineHeight: 1.65, marginTop: 10 }}>{copy}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="waitlist" className="container" style={{ paddingTop: 28, paddingBottom: 28 }}>
        <div className="card glow" style={{ padding: 24 }}>
          <div style={{ maxWidth: 680 }}>
            <h2 className="section-title" style={{ marginTop: 0, marginBottom: 12 }}>
              Join the waitlist
            </h2>
            <p className="section-copy" style={{ marginTop: 0 }}>
              Get early access to crossover intelligence, launch reports, and partnership
              discovery.
            </p>
          </div>

          <form
            action={async (formData) => {
              await handleWaitlist(formData);
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              gap: 14,
              marginTop: 18,
            }}
          >
            <input className="input" name="name" placeholder="Your name" required />
            <input
              className="input"
              name="email"
              type="email"
              placeholder="Work email"
              required
            />
            <input className="input" name="company" placeholder="Company" />

            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                gap: 14,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <button className="btn" type="submit" disabled={waitlist.loading}>
                {waitlist.loading ? "Submitting..." : "Join Waitlist"}
              </button>
              {waitlist.success ? (
                <span style={{ color: "#9ff2b4" }}>{waitlist.success}</span>
              ) : null}
              {waitlist.error ? (
                <span style={{ color: "#ffb2b2" }}>{waitlist.error}</span>
              ) : null}
            </div>
          </form>
        </div>
      </section>

      <section id="intake" className="container" style={{ paddingTop: 28, paddingBottom: 56 }}>
        <div className="card glow" style={{ padding: 24 }}>
          <div style={{ maxWidth: 760 }}>
            <h2 className="section-title" style={{ marginTop: 0, marginBottom: 12 }}>
              Get your first crossover report
            </h2>
            <p className="section-copy" style={{ marginTop: 0 }}>
              Submit your brand and we’ll evaluate the strongest category extensions,
              partner targets, and launch-worthy concepts.
            </p>
          </div>

          <form
            action={async (formData) => {
              await handleIntake(formData);
            }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0,1fr))",
              gap: 14,
              marginTop: 18,
            }}
          >
            <input className="input" name="full_name" placeholder="Full name" required />
            <input
              className="input"
              name="work_email"
              type="email"
              placeholder="Work email"
              required
            />
            <input className="input" name="brand_name" placeholder="Brand name" required />
            <input className="input" name="website_url" placeholder="Website URL" />
            <input
              className="input"
              name="category"
              placeholder="Category (e.g. candy, beverage, hospitality)"
              required
            />
            <textarea
              className="input"
              name="goals"
              placeholder="What are you trying to accomplish?"
              rows={5}
              required
            />
            <textarea
              className="input"
              name="dream_partners"
              placeholder="Dream partners or categories you’re interested in"
              rows={5}
            />

            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                gap: 14,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <button className="btn" type="submit" disabled={intake.loading}>
                {intake.loading ? "Submitting..." : "Submit Brand"}
              </button>
              {intake.success ? (
                <span style={{ color: "#9ff2b4" }}>{intake.success}</span>
              ) : null}
              {intake.error ? (
                <span style={{ color: "#ffb2b2" }}>{intake.error}</span>
              ) : null}
            </div>
          </form>
        </div>
      </section>

      <footer className="container" style={{ paddingTop: 12, paddingBottom: 40 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            color: "#9eb1cc",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 20,
          }}
        >
          <div style={{ fontWeight: 700, color: "#eaf2ff" }}>BrandCrossover</div>
          <div>Discover, score, and launch profitable brand collaborations.</div>
        </div>
      </footer>
    </main>
  );
}
