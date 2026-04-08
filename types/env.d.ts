declare namespace NodeJS {
  interface ProcessEnv {
    // Supabase
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    SUPABASE_SERVICE_ROLE_KEY: string;
    
    // Application
    ADMIN_DASHBOARD_KEY?: string;
    NODE_ENV: 'development' | 'production' | 'test';
    
    // Deployment
    NEXT_PUBLIC_VERCEL_ENV?: 'production' | 'preview' | 'development';
    NEXT_PUBLIC_VERCEL_URL?: string;
  }
}
