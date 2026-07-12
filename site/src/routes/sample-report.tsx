import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sample-report")({
  component: SampleReport,
});

/* ───── Status Badge ───── */
function StatusBadge({ status }: { status: "green" | "yellow" | "red" }) {
  const colors = {
    green: "bg-green-100 text-green-700 border-green-200",
    yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
    red: "bg-red-100 text-red-700 border-red-200",
  };
  const labels = { green: "On Track", yellow: "At Risk", red: "Over Budget" };
  const dots = { green: "bg-green-500", yellow: "bg-yellow-500", red: "bg-red-500" };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold ${colors[status]}`}>
      <span className={`size-1.5 rounded-full ${dots[status]}`} />
      {labels[status]}
    </span>
  );
}

/* ───── Section Header ───── */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 break-inside-avoid">
      <h2 className="mb-4 text-base font-bold uppercase tracking-wide text-gray-500">{title}</h2>
      {children}
    </div>
  );
}

/* ───── Table Wrapper ───── */
function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200 text-sm">{children}</table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="bg-gray-50 px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="whitespace-nowrap px-3 py-2.5 text-gray-700">{children}</td>;
}

/* ───── Photo Placeholder ───── */
function PhotoTile({ timestamp, milestone }: { timestamp: string; milestone: string }) {
  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-lg bg-gray-100">
      <div className="text-center px-4">
        <div className="text-2xl text-gray-300">📷</div>
        <p className="mt-1 text-xs text-gray-400">{timestamp}</p>
        <p className="text-xs font-medium text-gray-500">{milestone}</p>
      </div>
    </div>
  );
}

/* ───── Cypress Landing Report ───── */
function SampleReport() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      {/* Paper-like wrapper */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        {/* Header */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">VendorProof HOA</p>
              <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">Board-Ready Project Report</h1>
            </div>
            <StatusBadge status="yellow" />
          </div>
          <p className="mt-2 text-sm text-gray-400">Generated July 8, 2026</p>
        </div>

        {/* 1. Project Overview */}
        <Section title="1. Project Overview">
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <dl className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {[
                ["Community", "Cypress Landing at University Park HOA"],
                ["Location", "Sarasota/Bradenton corridor, FL"],
                ["Community Type", "Master-planned HOA, 412 parcels"],
                ["Project", "Roadway Milling & Resurfacing — Phase 1 of 3"],
                ["Vendor", "Gulf Coast Paving & Sealcoat, LLC"],
                ["Contract Executed", "March 9, 2026"],
                ["Target Completion", "August 15, 2026"],
                ["Manager of Record", "K. Delgado, CAM"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        {/* 2. Budget Summary */}
        <Section title="2. Budget Summary">
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {[
              ["Approved Budget", "$195,000"],
              ["Contract Amount", "$182,400"],
              ["Billed to Date", "$118,500 (65.0%)"],
              ["Paid to Date", "$72,960"],
              ["Remaining Contract Balance", "$63,900"],
              ["Budget Remaining vs. Approved", "$76,500"],
              ["Pending Change Orders", "$4,800 (unapproved)"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-gray-100 py-1.5 text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 3. Billing vs Progress */}
        <Section title="3. Billing vs. Progress">
          <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🟡</span>
              <div>
                <p className="font-semibold text-yellow-800">Billing is ahead of documented progress</p>
                <p className="mt-1 text-sm text-yellow-700">
                  <strong>65% billed</strong> vs. <strong>48% documented complete</strong> — billing is 17 points ahead.
                  Milestone 2 documentation is incomplete.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* 4. Milestone Status */}
        <Section title="4. Milestone Status">
          <Table>
            <thead>
              <tr>
                <Th>#</Th>
                <Th>Milestone</Th>
                <Th>Pay %</Th>
                <Th>Due</Th>
                <Th>Status</Th>
                <Th>Photos</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["1", "Mobilization, MOT setup, base repair — north loop", "15%", "Apr 3", "✅ Complete", "24"],
                ["2", "Base repair — cul-de-sacs (Wren Ct, Ibis Ct), milling north loop", "25%", "May 22", "⚠️ Invoiced, docs incomplete", "6"],
                ["3", "Milling south loop + first lift asphalt north", "25%", "Jun 30", "🔄 In progress", "11"],
                ["4", "Final lift, both loops", "25%", "Jul 31", "⏳ Not started", "0"],
                ["5", "Striping, signage, punch list, demobilization", "10%", "Aug 15", "⏳ Not started", "0"],
              ].map(([num, name, pay, due, status, photos]) => (
                <tr key={num}>
                  <Td>{num}</Td>
                  <td className="px-3 py-2.5 text-sm text-gray-900">{name}</td>
                  <Td>{pay}</Td>
                  <Td>{due}</Td>
                  <Td>{status}</Td>
                  <Td>{photos}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>

        {/* 5. Photos by Milestone */}
        <Section title="5. Photos by Milestone">
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-700">Milestone 1 — Mobilization & Base Repair (24 photos)</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <PhotoTile timestamp="Apr 3, 2026 • 8:42 AM" milestone="Milestone 1" />
                <PhotoTile timestamp="Apr 3, 2026 • 10:15 AM" milestone="Milestone 1" />
                <PhotoTile timestamp="Apr 5, 2026 • 7:30 AM" milestone="Milestone 1" />
                <PhotoTile timestamp="Apr 5, 2026 • 1:20 PM" milestone="Milestone 1" />
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-700">Milestone 2 — Cul-de-sac Base Repair (6 photos)</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <PhotoTile timestamp="May 20, 2026 • 9:00 AM" milestone="Milestone 2" />
                <PhotoTile timestamp="May 20, 2026 • 11:30 AM" milestone="Milestone 2" />
                <PhotoTile timestamp="May 22, 2026 • 8:15 AM" milestone="Milestone 2" />
              </div>
              <p className="mt-2 text-xs font-medium text-yellow-600">⚠️ Wren Ct and Ibis Ct cul-de-sac base repair not yet photographed</p>
            </div>
          </div>
        </Section>

        {/* 6. Invoice Status */}
        <Section title="6. Invoice / Payment Request Status">
          <Table>
            <thead>
              <tr>
                <Th>Invoice</Th>
                <Th>Milestone</Th>
                <Th>Amount</Th>
                <Th>Received</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["GC-1042", "M1", "$27,360", "Apr 5", "✅ Paid Apr 18"],
                ["GC-1067", "M2", "$45,600", "May 24", "⏸️ Hold"],
                ["GC-1071", "M3 (partial)", "$45,540", "Jun 28", "🔍 Under review"],
              ].map(([inv, ms, amt, recvd, status]) => (
                <tr key={inv}>
                  <Td>{inv}</Td>
                  <Td>{ms}</Td>
                  <Td>{amt}</Td>
                  <Td>{recvd}</Td>
                  <Td>{status}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Section>

        {/* 7. Change Order Log */}
        <Section title="7. Change Order Log">
          <Table>
            <thead>
              <tr>
                <Th>CO #</Th>
                <Th>Description</Th>
                <Th>Amount</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <Td>CO-01</Td>
                <td className="px-3 py-2.5 text-sm text-gray-700">Thermoplastic striping upgrade (vendor-initiated)</td>
                <Td>$4,800</Td>
                <td><span className="font-medium text-red-600">Submitted without board approval</span></td>
              </tr>
            </tbody>
          </Table>
        </Section>

        {/* 8. Open Issues */}
        <Section title="8. Open Issues">
          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700">
            <li>No photo documentation of base repair at Wren Ct and Ibis Ct cul-de-sacs, both invoiced under Milestone 2.</li>
            <li>CO-01 ($4,800) submitted after work discussion but before board approval; not authorized under contract §7.2.</li>
            <li>Invoice GC-1071 bills partial Milestone 3 ahead of Milestone 2 closure.</li>
          </ol>
        </Section>

        {/* 9. Manager Recommendation */}
        <Section title="9. Manager Recommendation">
          <div className="rounded-lg border border-teal-100 bg-teal-50 p-4">
            <p className="text-sm leading-relaxed text-teal-900">
              Release Milestone 2 payment <strong>less the $4,800 change order</strong>, contingent on (a) receipt of base-repair photos at both cul-de-sacs and (b) manager walkthrough scheduled July 11. Hold Invoice GC-1071 until Milestone 2 is closed. Present CO-01 for board vote at the July meeting.
            </p>
          </div>
        </Section>

        {/* 10. Next Steps */}
        <Section title="10. Next Steps">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Vendor to upload cul-de-sac base repair photos via upload link (sent Jul 6)</li>
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Manager walkthrough — Jul 11, 8:00 AM</li>
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Board vote on CO-01 — Jul 16 meeting</li>
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Re-run report after walkthrough</li>
          </ul>
        </Section>

        {/* Footer Disclaimer */}
        <div className="mt-10 border-t border-gray-200 pt-4 text-center">
          <p className="text-xs text-gray-400 italic">Sample report — illustrative project data. Communities, vendors, and figures shown are fictional.</p>
        </div>
      </div>
    </div>
  );
}