import postgres from "postgres";

/**
 * Server-only handle to the team's database (Supabase Postgres).
 * The connection string comes from `DATABASE_URL`, set in Vercel's
 * environment variables (or a local .env for dev).
 *
 * Use it only inside a `createServerFn()` handler or an `src/routes/api/*`
 * route (never client code):
 *
 *   const getPosts = createServerFn().handler(async () => {
 *     const rows = await sql()`select id, title, created_at from posts`;
 *     return rows.map((r) => ({ ...r, created_at: String(r.created_at) }));
 *   });
 */
export const sql = () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "DATABASE_URL is not set — add your Supabase connection string.",
    );
  }
  return postgres(url, { ssl: "require" });
};