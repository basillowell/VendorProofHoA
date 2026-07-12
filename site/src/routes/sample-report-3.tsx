import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sample-report-3")({
  component: PalmAireReport,
});

function StatusBadge({ status }: { status: "green" | "yellow" | "red" }) {
  const colors = { green: "bg-green-100 text-green-700 border-green-200", yellow: "bg-yellow-100 text-yellow-700 border-yellow-200", red: "bg-red-100 text-red-700 border-red-200" };
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

function PalmAireReport() {
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
                ["Community", "Palm Aire Villas Homeowners Association"],
                ["Location", "Palmetto, FL"],
                ["Community Type", "55+ community, 188 villas"],
                ["Project", "Pool Resurfacing & Paver Deck Replacement"],
                ["Vendor", "Manatee Pool & Paver Co."],
                ["Contract Executed", "February 2, 2026"],
                ["Completed", "May 29, 2026"],
                ["Manager of Record", "T. Okafor, CAM"],
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
          <div className="rounded-lg border border-green-200 bg-green-50 p-3 mb-4">
            <p className="text-sm font-semibold text-green-800">✅ Final cost $4,700 under approved budget</p>
          </div>
          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {[
              ["Approved Budget", "$72,000"],
              ["Contract Amount", "$67,300"],
              ["Billed to Date", "$67,300 (100%)"],
              ["Paid to Date", "$60,570"],
              ["Retainage Held", "$6,730 (10%)"],
              ["Change Orders", "$0"],
              ["Final Cost vs. Approved Budget", "$4,700 under budget"],
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
                <p className="font-semibold text-green-800">All milestones documented — recommend final payment & retainage release</p>
                <p className="mt-1 text-sm text-green-700"><strong>100% billed</strong> vs. <strong>100% documented complete</strong></p>
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
                ["1", "Drain, chip-out, surface prep", "20%", "Mar 6", "✅ Complete", "18"],
                ["2", "Plumbing/light inspection, resurface application", "30%", "Apr 10", "✅ Complete", "22"],
                ["3", "Paver deck demo & replacement", "30%", "May 8", "✅ Complete", "31"],
                ["4", "Fill, startup chemistry, deck sealing, punch list", "20%", "May 29", "✅ Complete", "17"],
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

        <Section title="5. Photos by Milestone">
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-700">Milestone 1 — Surface Prep (18 photos)</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <PhotoTile timestamp="Mar 4, 2026 • 7:30 AM" milestone="Milestone 1" />
                <PhotoTile timestamp="Mar 5, 2026 • 9:15 AM" milestone="Milestone 1" />
                <PhotoTile timestamp="Mar 5, 2026 • 2:00 PM" milestone="Milestone 1" />
                <PhotoTile timestamp="Mar 6, 2026 • 10:30 AM" milestone="Milestone 1" />
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-700">Milestone 2 — Resurface Application (22 photos)</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <PhotoTile timestamp="Apr 8, 2026 • 8:00 AM" milestone="Milestone 2" />
                <PhotoTile timestamp="Apr 9, 2026 • 11:20 AM" milestone="Milestone 2" />
                <PhotoTile timestamp="Apr 10, 2026 • 9:45 AM" milestone="Milestone 2" />
                <PhotoTile timestamp="Apr 10, 2026 • 3:15 PM" milestone="Milestone 2" />
              </div>
            </div>
          </div>
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
                ["MPP-118", "M1", "$13,460", "Mar 8", "✅ Paid Mar 15"],
                ["MPP-124", "M2", "$20,190", "Apr 12", "✅ Paid Apr 19"],
                ["MPP-131", "M3", "$20,190", "May 10", "✅ Paid May 16"],
                ["MPP-137", "M4 + retainage", "$20,190", "Jun 1", "⭐ Recommended for approval"],
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
          <p className="text-sm text-gray-500 italic">None. Project completed per original scope.</p>
        </Section>

        <Section title="8. Open Issues">
          <p className="text-sm text-gray-500 italic">None. Final walkthrough completed May 30 with zero punch-list items outstanding.</p>
        </Section>

        <Section title="9. Manager Recommendation">
          <div className="rounded-lg border border-teal-100 bg-teal-50 p-4">
            <p className="text-sm leading-relaxed text-teal-900">
              All milestones fully documented with 88 timestamped photos. Work completed on schedule and $4,700 under approved budget. <strong>Recommend board approve final payment MPP-137 and release retainage at the June meeting.</strong> Vendor documentation quality was excellent; recommend Manatee Pool & Paver for future bid lists.
            </p>
          </div>
        </Section>

        <Section title="10. Next Steps">
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Board approval of final payment + retainage — Jun meeting</li>
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Archive complete project record to community file</li>
            <li className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded border border-gray-300 text-xs text-gray-400">☐</span> Add vendor performance note to vendor record</li>
          </ul>
        </Section>

        <div className="mt-10 border-t border-gray-200 pt-4 text-center">
          <p className="text-xs text-gray-400 italic">Sample report — illustrative project data. Communities, vendors, and figures shown are fictional.</p>
        </div>
      </div>
    </div>
  );
}