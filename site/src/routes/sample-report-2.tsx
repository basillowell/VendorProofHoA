import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sample-report-2")({
  component: HarbourPointeReport,
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 break-inside-avoid">
      <h2 className="mb-4 text-base font-bold uppercase tracking-wide text-gray-500">{title}</h2>
      {children}
    </div>
  );
}

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

function HarbourPointeReport() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-10">
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">VendorProof HOA</p>
              <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">Board-Ready Project Report</h1>
            </div>
            <StatusBadge status="green" />
          </div>
          <p className="mt-2 text-sm text-gray-400">Generated July 8, 2026</p>
        </div>

        <Section title="1. Project Overview">
          <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
            <dl className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {[
                ["Community", "Harbour Pointe Condominium Association"],
                ["Location", "Venice, FL"],
                ["Community Type", "Mid-rise condominium, 4 stories, 3 buildings, 96 units"],
                ["Project", "Concrete Restoration, Balcony Waterproofing & Exterior Repaint (SIRS-driven)"],
                ["Vendor", "Suncoast Structural Restoration, Inc."],
                ["Engineer of Record", "Bayline Engineering Group"],
                ["Contract Executed", "April 20, 2026"],
                ["Target Completion", "February 2027"],
                ["Manager of Record", "R. Whitfield, CAM"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-gray-400">{label}</dt>
                  <dd className="mt-0.5 text-sm font-medium text-gray-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>

        <Section title="2. Budget Summary">
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {[
              ["Approved Budget (Reserve-Funded)", "$438,000"],
              ["Contract Amount", "$412,700"],
              ["Billed to Date", "$96,000 (23.3%)"],
              ["Paid to Date", "$96,000"],
              ["Remaining Contract Balance", "$316,700"],
              ["Change Orders to Date", "$0"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between border-b border-gray-100 py-1.5 text-sm">
                <span className="text-gray-500">{label}</span>
                <span className="font-semibold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section title="3. Billing vs. Progress">
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🟢</span>
              <div>
                <p className="font-semibold text-green-800">Billing tracks documented progress within tolerance</p>
                <p className="mt-1 text-sm text-green-700">
                  <strong>23% billed</strong> vs. <strong>22% documented complete</strong> — on track.
                </p>
              </div>
            </div>
          </div>
        </Section>

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
                ["1", "Mobilization, engineering survey, spall mapping", "10%", "May 15", "✅ Complete", "41"],
                ["2", "Concrete restoration — Building A", "20%", "Jul 20", "🔄 In progress (60%)", "28"],
                ["3", "Concrete restoration — Building B", "20%", "Sep 30", "⏳ Pending engineer sign-off", "9"],
                ["4", "Balcony waterproofing — all buildings", "20%", "Nov 30", "⏳ Not started", "0"],
                ["5", "Exterior repaint — all buildings", "20%", "Jan 2027", "⏳ Not started", "0"],
                ["6", "Final engineer certification, punch list", "10%", "Feb 2027", "⏳ Not started", "0"],
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
                ["SSR-2201", "M1", "$41,270", "May 18", "✅ Paid Jun 1"],
                ["SSR-2214", "M2 (partial)", "$54,730", "Jun 25", "✅ Paid Jul 2"],
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

        <Section title="7. Change Order Log">
          <p className="text-sm text-gray-500 italic">None to date.</p>
        </Section>

        <Section title="8. Open Issues">
          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-700">
            <li>Engineer's written sign-off on spall repairs at Building B required before Milestone 3 invoicing per contract §5.4 — requested from Bayline Jun 30, pending.</li>
          </ol>
        </Section>

        <Section title="9. Manager Recommendation">
          <div className="rounded-lg border border-teal-100 bg-teal-50 p-4">
            <p className="text-sm leading-relaxed text-teal-900">
              Project is on schedule and billing reconciles with documented progress. Continue current draw schedule. Do not accept Milestone 3 invoicing until Bayline's Building B sign-off is on file — this document is part of the association's SIRS/milestone-inspection record.
            </p>
          </div>
        </Section>

        <Section title="10. Next Steps">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Follow up with Bayline for Building B sign-off (due Jul 14)</li>
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Include this report in the August board packet</li>
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Archive M1–M2 photo sets to association permanent record</li>
          </ul>
        </Section>

        <div className="mt-10 border-t border-gray-200 pt-4 text-center">
          <p className="text-xs text-gray-400 italic">Sample report — illustrative project data. Communities, vendors, and figures shown are fictional.</p>
        </div>
      </div>
    </div>
  );
}