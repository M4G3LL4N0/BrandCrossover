import { createAdminSupabase } from "@/lib/supabase-admin";
import { env } from "@/lib/env";

export const dynamic = "force-dynamic";

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ key?: string }>;
}) {
  const params = await searchParams;

  if (!env.ADMIN_DASHBOARD_KEY || params.key !== env.ADMIN_DASHBOARD_KEY) {
    return (
      <main className="container" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="card glow" style={{ padding: 24 }}>
          <h1 style={{ marginTop: 0 }}>Unauthorized</h1>
          <p style={{ color: "#9eb1cc" }}>
            Add <code>?key=YOUR_ADMIN_DASHBOARD_KEY</code> to access this page.
          </p>
        </div>
      </main>
    );
  }

  const supabase = createAdminSupabase();

  const [{ data: waitlist }, { data: intake }, { data: opportunities }] = await Promise.all([
    supabase
      .from("waitlist_signups")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
    supabase
      .from("brand_intake_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(100),
    supabase
      .from("crossover_opportunities")
      .select("*")
      .order("score", { ascending: false })
      .limit(100),
  ]);

  return (
    <main className="container" style={{ paddingTop: 40, paddingBottom: 80 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 32 }}>
        <h1 className="section-title" style={{ margin: 0 }}>
          BrandCrossover Admin
        </h1>
        <div style={{ color: 'var(--muted)', fontSize: 14 }}>
          {new Date().toLocaleDateString()}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
        <div className="card glow" style={{ padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontWeight: 700 }}>Waitlist Signups</div>
            <div style={{ color: 'var(--accent)', fontSize: 13 }}>{(waitlist || []).length} total</div>
          </div>
        </div>
        <div className="card glow" style={{ padding: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ fontWeight: 700 }}>Brand Intakes</div>
            <div style={{ color: 'var(--accent)', fontSize: 13 }}>{(intake || []).length} total</div>
          </div>
        </div>
      </div>

      <section className="card glow" style={{ padding: 20, marginBottom: 24 }}>
        <h2 style={{ marginTop: 0 }}>Waitlist Signups</h2>
        <div style={{ display: "grid", gap: 12 }}>
          {(waitlist || []).map((row: any) => (
            <div key={row.id} className="card" style={{ padding: 16 }}>
              <div><strong>{row.name}</strong> — {row.email}</div>
              <div style={{ color: "#9eb1cc", marginTop: 6 }}>{row.company || "No company"}</div>
              <div style={{ color: "#88a0bd", marginTop: 6, fontSize: 13 }}>{row.created_at}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card glow" style={{ padding: 20, marginBottom: 24 }}>
        <h2 style={{ marginTop: 0 }}>Brand Intake Submissions</h2>
        <div style={{ display: "grid", gap: 12 }}>
          {(intake || []).map((row: any) => (
            <div key={row.id} className="card" style={{ padding: 16 }}>
              <div style={{ fontWeight: 700 }}>{row.brand_name}</div>
              <div style={{ marginTop: 6 }}>{row.full_name} — {row.work_email}</div>
              <div style={{ color: "#9eb1cc", marginTop: 6 }}>Category: {row.category}</div>
              {row.website_url ? (
                <div style={{ color: "#9eb1cc", marginTop: 6 }}>Website: {row.website_url}</div>
              ) : null}
              <div style={{ marginTop: 10 }}>
                <strong>Goals:</strong>
                <div style={{ color: "#d7e6f8", marginTop: 6, whiteSpace: "pre-wrap" }}>{row.goals}</div>
              </div>
              {row.dream_partners ? (
                <div style={{ marginTop: 10 }}>
                  <strong>Dream partners:</strong>
                  <div style={{ color: "#d7e6f8", marginTop: 6, whiteSpace: "pre-wrap" }}>{row.dream_partners}</div>
                </div>
              ) : null}
              <div style={{ color: "#88a0bd", marginTop: 10, fontSize: 13 }}>{row.created_at}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="card glow" style={{ padding: 20 }}>
        <h2 style={{ marginTop: 0 }}>Generated Opportunities</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ color: 'var(--muted)', textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '12px 16px' }}>Score</th>
              <th style={{ padding: '12px 16px' }}>Brands</th>
              <th style={{ padding: '12px 16px' }}>Category</th>
              <th style={{ padding: '12px 16px' }}>Summary</th>
              <th style={{ padding: '12px 16px' }}>Created</th>
            </tr>
          </thead>
          <tbody>
            {(opportunities || []).map((row: any) => (
              <tr key={row.id} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '12px 16px', fontWeight: 700 }}>{row.score}</td>
                <td style={{ padding: '12px 16px' }}>
                  <div style={{ fontWeight: 700 }}>{row.brand_pair}</div>
                </td>
                <td style={{ padding: '12px 16px', color: 'var(--muted)' }}>{row.category}</td>
                <td style={{ padding: '12px 16px', maxWidth: 400 }}>
                  <div style={{ whiteSpace: 'pre-wrap', fontSize: 14 }}>{row.summary}</div>
                </td>
                <td style={{ padding: '12px 16px', color: '#88a0bd', fontSize: 13 }}>{row.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
