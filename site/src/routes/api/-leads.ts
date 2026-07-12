import { createAPIFileRoute } from "@tanstack/react-start/api";
import { sql } from "~/db";

export const Route = createAPIFileRoute("/api/leads")({
  POST: async ({ request }) => {
    try {
      const body = await request.json();

      const {
        name,
        company,
        email,
        phone = "",
        city,
        communities,
        projectTypes = "",
        currentSoftware = "",
        testProject,
      } = body;

      if (!name || !company || !email || !city || !communities || !testProject) {
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          { status: 400, headers: { "Content-Type": "application/json" } },
        );
      }

      // Store in database — gracefully handles missing DATABASE_URL
      try {
        const db = sql();
        await db`
          INSERT INTO leads (
            name, company, email, phone, city, communities,
            project_types, current_software, test_project, created_at
          ) VALUES (
            ${name}, ${company}, ${email}, ${phone}, ${city}, ${communities},
            ${projectTypes}, ${currentSoftware}, ${testProject}, NOW()
          )
        `;
      } catch (dbError: unknown) {
        const msg =
          dbError instanceof Error ? dbError.message : String(dbError);
        console.warn("Lead capture DB unavailable:", msg);
      }

      return new Response(JSON.stringify({ success: true }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Lead capture error:", msg);
      return new Response(
        JSON.stringify({ error: "Internal server error" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }
  },
});