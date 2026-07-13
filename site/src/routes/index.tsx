import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { sql } from "~/db";
import { useState } from "react";

// Server function to store lead capture form submissions
const saveLead = createServerFn({ method: "POST" }).handler(
  async (data: {
    name: string;
    company: string;
    email: string;
    phone: string;
    city: string;
    communities: string;
    projectTypes: string;
    currentSoftware: string;
    testProject: string;
  }) => {
try {
      const db = sql();
      await db`
        INSERT INTO leads (
          name, company, email, phone, city, communities,
          project_types, current_software, test_project, created_at
        ) VALUES (
          ${data.name ?? ""}, ${data.company ?? ""}, ${data.email ?? ""}, ${data.phone ?? ""},
          ${data.city ?? ""}, ${data.communities ?? ""}, ${data.projectTypes ?? ""},
          ${data.currentSoftware ?? ""}, ${data.testProject ?? ""}, NOW()
        )
      `;
    } catch (err: unknown) {
      console.error("[lead-capture] DB insert failed:", err);
    }
    return { success: true };  },
);

export const Route = createFileRoute("/")({
  component: Home,
});

/* ───── Simple SVG Icons (inline) ───── */

function IconCheckCircle({ className = "size-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
      />
    </svg>
  );
}

function IconChevronRight({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

/* ───── Feature Icons ───── */

function FeatureIcon({ icon, className = "" }: { icon: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    link: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
    photo: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
      </svg>
    ),
    checklist: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    budget: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    invoice: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    "change-order": (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    approval: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    ),
    ai: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    pdf: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
      </svg>
    ),
    archive: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
      </svg>
    ),
  };

  return (
    <div className={className}>
      {icons[icon] || <IconCheckCircle />}
    </div>
  );
}

/* ───── Navigation ───── */
function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#" className="text-lg font-bold tracking-tight text-teal-700">
          VendorProof<span className="text-teal-500">HOA</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          <a href="#how-it-works" className="hover:text-teal-600 transition-colors">How It Works</a>
          <a href="#features" className="hover:text-teal-600 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-teal-600 transition-colors">Pricing</a>
          <a href="#pilot" className="hover:text-teal-600 transition-colors">Pilot</a>
        </div>
        <a
          href="#pilot"
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-teal-700 hover:shadow-md"
        >
          Join the Pilot
        </a>
      </nav>
    </header>
  );
}

/* ───── Hero ───── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* subtle grid background */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 uppercase">
          Built for Florida HOA &amp; Condo Managers
        </span>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Stop approving HOA contractor invoices{" "}
          <span className="text-teal-600">without progress proof.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
          VendorProof HOA helps Florida property managers collect contractor photos, track
          milestones, compare billing to approved budgets, and export board-ready project
          reports.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#pilot"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl"
          >
            Join the Florida Pilot
            <IconChevronRight />
          </a>
          <a
            href="/sample-report"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
          >
            View Sample Report
          </a>
        </div>

        {/* Sample Report Teasers */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
          <a
            href="/sample-report"
            className="group rounded-xl border border-gray-200 bg-white/80 p-4 text-left shadow-sm transition-all hover:border-yellow-300 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-yellow-600">Sample 1</span>
            <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-yellow-700">Know when billing runs ahead of the work.</p>
            <p className="mt-0.5 text-xs text-gray-400">Cypress Landing — Roadway Milling</p>
          </a>
          <a
            href="/sample-report-2"
            className="group rounded-xl border border-gray-200 bg-white/80 p-4 text-left shadow-sm transition-all hover:border-green-300 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-green-600">Sample 2</span>
            <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-green-700">Board-ready docs for SIRS-driven capital projects.</p>
            <p className="mt-0.5 text-xs text-gray-400">Harbour Pointe — Concrete Restoration</p>
          </a>
          <a
            href="/sample-report-3"
            className="group rounded-xl border border-gray-200 bg-white/80 p-4 text-left shadow-sm transition-all hover:border-teal-300 hover:shadow-md"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-teal-600">Sample 3</span>
            <p className="mt-1 text-sm font-medium text-gray-900 group-hover:text-teal-700">Good contractors get approved — and paid — faster.</p>
            <p className="mt-0.5 text-xs text-gray-400">Palm Aire Villas — Pool Resurfacing</p>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── Pain Section ───── */
function PainSection() {
  const pains = [
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      ),
      title: "Chasing contractors",
      desc: "Hours spent tracking down progress updates, photos, and status reports from vendors.",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
      ),
      title: "Board wants proof",
      desc: "Board members ask for photos, budget status, and payment explanations before every meeting.",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
        </svg>
      ),
      title: "Scattered information",
      desc: "Invoices in email, photos by text, contracts in a folder — nothing in one place.",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
      ),
      title: "Manual board reports",
      desc: "Every board update is rebuilt from scratch — gathering photos, invoices, and progress notes.",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-amber-700 uppercase">
            The Problem
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Managing HOA projects shouldn't feel like detective work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Property managers are stuck chasing contractors for updates while boards ask for
            proof, budget status, and payment explanations.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-amber-200 hover:shadow-md"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-100">
                {pain.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{pain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{pain.desc}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-gray-500 italic">
          VendorProof HOA organizes contractor progress, invoice backup, project milestones,
          and budget status into one simple report.
        </p>
      </div>
    </section>
  );
}

/* ───── How It Works (5 Steps) ───── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Create the Project",
      desc: "Enter the community, vendor, approved budget, contract amount, and project milestones.",
    },
    {
      num: "02",
      title: "Send Contractor Upload Link",
      desc: "The contractor receives a simple text or email link. No app download required.",
    },
    {
      num: "03",
      title: "Collect Progress Proof",
      desc: "The contractor uploads photos, notes, invoices, and completion status from the field.",
    },
    {
      num: "04",
      title: "Compare Billing to Progress",
      desc: "See project completion, invoice amount, budget remaining, and any variance concerns.",
    },
    {
      num: "05",
      title: "Export Board Report",
      desc: "Generate a clean PDF report for board meetings, payment approvals, and project records.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 uppercase">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Five steps to project clarity
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From project setup to board-ready report — VendorProof HOA keeps everything in
            one place.
          </p>
        </div>

        <div className="relative mt-14">
          {/* vertical line (desktop) */}
          <div className="absolute left-[1.625rem] top-0 hidden h-full w-px bg-teal-200 md:block lg:left-8" />

          <div className="space-y-12">
            {steps.map((step, idx) => (
              <div key={step.num} className="relative flex items-start gap-6 md:gap-8">
                {/* Number badge */}
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow-md lg:size-16 lg:text-lg">
                  {step.num}
                </div>
                <div className="min-w-0 pt-2">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-1 text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───── Gotcha Visual Flow (4 steps) ───── */
function GotchaFlow() {
  const steps = [
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
        </svg>
      ),
      label: "Contractor gets a link",
      desc: "Sent by text or email — no login required",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
      ),
      label: "Contractor uploads photos & invoice",
      desc: "Time-stamped proof from the field",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
      label: "Manager sees progress vs billing",
      desc: "Milestone completion, amounts, budget remaining",
    },
    {
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
        </svg>
      ),
      label: "Board-ready PDF is created",
      desc: "Export and share in minutes",
    },
  ];

  return (
    <section className="border-y border-gray-100 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From upload to board report
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple flow that keeps everyone on the same page.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={step.label} className="relative">
              <div className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  {step.icon}
                </div>
                <span className="mb-1 inline-flex size-6 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
                  {idx + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold text-gray-900">{step.label}</h3>
                <p className="mt-1 text-sm text-gray-500">{step.desc}</p>
              </div>
              {/* Arrow between cards on desktop */}
              {idx < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-teal-300 lg:block">
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Features ───── */
function Features() {
  const features = [
    { icon: "link", title: "No-login contractor upload links" },
    { icon: "photo", title: "Time-stamped progress photos" },
    { icon: "checklist", title: "Milestone checklist" },
    { icon: "budget", title: "Approved budget vs actual billed" },
    { icon: "invoice", title: "Invoice attachment" },
    { icon: "change-order", title: "Change order log" },
    { icon: "approval", title: "Manager approval notes" },
    { icon: "ai", title: "AI-generated progress summary" },
    { icon: "pdf", title: "Board-ready PDF export" },
    { icon: "archive", title: "Project archive by community" },
  ];

  return (
    <section id="features" className="bg-gradient-to-b from-white to-teal-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 uppercase">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to track vendor projects
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            No more chasing contractors or rebuilding board reports from scratch.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-teal-200 hover:shadow-md"
            >
              <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600 group-hover:bg-teal-100">
                <FeatureIcon icon={f.icon} />
              </div>
              <h3 className="text-sm font-semibold leading-snug text-gray-900">{f.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Pricing ───── */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      desc: "Up to 5 active projects",
      features: ["Project setup", "Contractor upload links", "Progress photo collection", "Milestone tracking", "Budget vs billed", "Board-ready PDF report"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Growth",
      price: "$499",
      period: "/month",
      desc: "Up to 20 active projects",
      features: ["Everything in Starter", "Priority support", "Custom milestones", "Multi-community view", "Export history", "Team access"],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Portfolio",
      price: "$999",
      period: "/month+",
      desc: "Larger portfolios",
      features: ["Everything in Growth", "Dedicated onboarding", "API access", "Custom integrations", "Bulk project import", "White-label reports"],
      cta: "Contact Us",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-700 uppercase">
            Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Start small and scale as you add more communities. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 shadow-sm transition-all hover:shadow-lg ${
                plan.highlighted
                  ? "border-teal-300 bg-white ring-2 ring-teal-500"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.desc}</p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{plan.price}</span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2 text-sm text-gray-600">
                    <IconCheckCircle className="mt-0.5 size-4 shrink-0 text-teal-500" />
                    {feat}
                  </li>
                ))}
              </ul>
              <a
                href="#pilot"
                className={`mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-teal-600 text-white shadow-md hover:bg-teal-700 hover:shadow-lg"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───── Pilot Program ───── */
function PilotSection() {
  const includes = [
    "Setup for 1–3 active projects",
    "Custom project milestones",
    "Contractor upload links",
    "Progress photo collection",
    "Budget vs billed tracking",
    "Board-ready PDF report",
    "Feedback call",
  ];

  return (
    <section id="pilot" className="bg-teal-700 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-teal-500/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-100 uppercase">
            Limited Availability
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Florida Property Manager Pilot Program
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-teal-100">
            We are looking for a small group of Florida HOA and condo management companies to
            test VendorProof HOA on active vendor projects.
          </p>
          <p className="mt-3 text-sm text-teal-200">
            Ideal for projects such as sidewalk repair, paving, roofing, painting, pressure
            washing, drainage, pool work, and other capital repairs.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <h3 className="text-center text-lg font-semibold text-white">The pilot includes:</h3>
          <ul className="mt-6 space-y-3">
            {includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-teal-100">
                <IconCheckCircle className="size-5 shrink-0 text-teal-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#lead-capture"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-bold text-teal-700 shadow-lg transition-all hover:bg-teal-50 hover:shadow-xl"
          >
            Apply for the Pilot
            <IconChevronRight className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───── Lead Capture Form ───── */
function LeadCaptureForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
      communities: (form.elements.namedItem("communities") as HTMLSelectElement).value,
      projectTypes: (form.elements.namedItem("project-types") as HTMLTextAreaElement).value,
      currentSoftware: (form.elements.namedItem("current-software") as HTMLTextAreaElement).value,
      testProject: (form.elements.namedItem("test-project") as HTMLSelectElement).value,
    };

    try {
      const result = await saveLead(data);

      if (!result.success) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <section id="lead-capture" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Application Received!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Thank you for your interest in VendorProof HOA. We'll be in touch within 48 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-capture" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Apply for the Pilot
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below and we'll be in touch within 48 hours.
          </p>
        </div>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit}>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City / Region in Florida <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              placeholder="e.g. Tampa, Orlando, Miami"
            />
          </div>

          <div>
            <label htmlFor="communities" className="block text-sm font-medium text-gray-700">
              How many communities do you manage? <span className="text-red-500">*</span>
            </label>
            <select
              id="communities"
              name="communities"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            >
              <option value="">Select...</option>
              <option value="1-5">1–5</option>
              <option value="6-15">6–15</option>
              <option value="16-30">16–30</option>
              <option value="31-50">31–50</option>
              <option value="50+">50+</option>
            </select>
          </div>

          <div>
            <label htmlFor="project-types" className="block text-sm font-medium text-gray-700">
              What type of projects do you need better tracking for?
            </label>
            <textarea
              id="project-types"
              name="project-types"
              rows={3}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              placeholder="e.g. sidewalk repair, roofing, painting, pool work..."
            />
          </div>

          <div>
            <label htmlFor="current-software" className="block text-sm font-medium text-gray-700">
              Are you currently using software for vendor or project tracking?
            </label>
            <textarea
              id="current-software"
              name="current-software"
              rows={2}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              placeholder="Yes — we use [software name]. No — we track manually."
            />
          </div>

          <div>
            <label htmlFor="test-project" className="block text-sm font-medium text-gray-700">
              Would you be open to testing this on one active project?{" "}
              <span className="text-red-500">*</span>
            </label>
            <select
              id="test-project"
              name="test-project"
              required
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm transition-colors focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            >
              <option value="">Select...</option>
              <option value="yes">Yes</option>
              <option value="maybe">Maybe — tell me more</option>
              <option value="not-yet">Not yet</option>
            </select>
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-teal-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>

          <p className="text-center text-xs text-gray-400">
            We'll respond within 48 hours. No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
}

/* ───── Footer ───── */
function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-teal-700">VendorProof HOA</span> &copy;{" "}
          {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-gray-600 transition-colors">
            Contact
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Privacy
          </a>
          <a
            href="https://cto.new"
            className="hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built with cto.new
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ───── Page ───── */
function Home() {
  return (
    <div className="font-['Inter',ui-sans-serif,system-ui,sans-serif]">
      <Header />
      <Hero />
      <PainSection />
      <HowItWorks />
      <GotchaFlow />
      <Features />
      <Pricing />
      <PilotSection />
      <LeadCaptureForm />
      <Footer />
    </div>
  );
}