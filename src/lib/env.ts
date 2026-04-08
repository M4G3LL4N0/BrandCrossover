function required<T extends string = string>(name: string): T {
  const value = process.env[name] as T | undefined;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function optional<T extends string = string>(name: string, defaultValue: T = '' as T): T {
  return (process.env[name] as T | undefined) ?? defaultValue;
}

export const env = {
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL: required<string>("NEXT_PUBLIC_SUPABASE_URL"),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: required<string>("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  SUPABASE_SERVICE_ROLE_KEY: required<string>("SUPABASE_SERVICE_ROLE_KEY"),
  
  // Application
  ADMIN_DASHBOARD_KEY: optional<string>("ADMIN_DASHBOARD_KEY"),
  
  // System
  NODE_ENV: required<'development' | 'production' | 'test'>("NODE_ENV"),
  NEXT_PUBLIC_VERCEL_ENV: optional<'production' | 'preview' | 'development'>("NEXT_PUBLIC_VERCEL_ENV", 'development'),
};
