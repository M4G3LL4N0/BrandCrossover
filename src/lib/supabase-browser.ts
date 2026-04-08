import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

export function createBrowserSupabase() {
  if (
    !env.NEXT_PUBLIC_SUPABASE_URL ||
    !env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    throw new Error("Supabase env vars missing in browser");
  }

  return createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      db: { schema: "brandcrossover" },
    }
  );
}
