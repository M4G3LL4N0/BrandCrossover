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

  const [{ data: waitlist }, { data: intake }] = await Promise.all([
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
  ]);

  return (
    <main className="container" style={{ paddingTop: 40, paddingBottom: 56 }}>
      <h1 className="section-title" style={{ marginBottom: 20 }}>
        BrandCrossover Admin
      </h1>

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

      <section className="card glow" style={{ padding: 20 }}>
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
    </main>
  );
}
