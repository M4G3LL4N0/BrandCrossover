import { createClient } from "@supabase/supabase-js";
import { env } from "@/lib/env";

export function createAdminSupabase() {
  // The required() function in env.ts already ensures this exists

  return createClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false
      },
      db: { schema: "brandcrossover" }
    }
  );
}
