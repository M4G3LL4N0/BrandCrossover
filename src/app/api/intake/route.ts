import { NextResponse } from "next/server";
import { createAdminSupabase } from "@/lib/supabase-admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const payload = {
      full_name: String(body.full_name || "").trim(),
      work_email: String(body.work_email || "").trim().toLowerCase(),
      brand_name: String(body.brand_name || "").trim(),
      website_url: String(body.website_url || "").trim() || null,
      category: String(body.category || "").trim(),
      goals: String(body.goals || "").trim(),
      dream_partners: String(body.dream_partners || "").trim() || null,
    };

    if (!payload.full_name || !payload.work_email || !payload.brand_name || !payload.category || !payload.goals) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const supabase = createAdminSupabase();

    const { error } = await supabase
      .from("brand_intake_submissions")
      .insert(payload);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
