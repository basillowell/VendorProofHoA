# VendorProof HOA — Sample Report Update

Update the existing `/sample-report` page and add the two additional samples from the owner's spec.

**Source:** `/home/team/shared/LANDING_PAGE_SPEC.md` no longer applies — use the owner's detailed sample data below.

## Core Requirements

1. **Replace** the current `/home/team/shared/site/src/routes/sample-report.tsx` with the Cypress Landing report (Sample 1)

2. **Create two more routes:**
   - `/home/team/shared/site/src/routes/sample-report-2.tsx` → Harbour Pointe Condominium (Sample 2 - Green/SIRS)
   - `/home/team/shared/site/src/routes/sample-report-3.tsx` → Palm Aire Villas (Sample 3 - Green/close-out)

3. **Update the Hero section** in `/home/team/shared/site/src/routes/index.tsx`:
   - Change "View Sample Report" link to `/sample-report`
   - Add a small nav below the buttons showing all three samples with their copy hooks:
     - "Know when billing runs ahead of the work"
     - "Board-ready documentation for SIRS-driven capital projects"
     - "Good contractors get approved — and paid — faster"

## Footer Disclaimer (mandatory on ALL three pages)
> Sample report — illustrative project data. Communities, vendors, and figures shown are fictional.

## Report Template Structure (all three)
1. Project Overview
2. Budget Summary
3. Billing vs. Progress Indicator (Green/Yellow/Red)
4. Milestone Status Table
5. Photos by Milestone (placeholder tiles with timestamps)
6. Invoice / Payment Request Status
7. Change Order Log
8. Open Issues
9. Manager Recommendation
10. Next Steps
11. Footer disclaimer

## Status Color Logic
- **Green:** billed % ≤ documented completion % + 10 points
- **Yellow:** billed % exceeds documented completion % by 11–25 points, OR required documentation missing on an invoiced milestone
- **Red:** billed % exceeds documented completion % by >25 points, OR invoice submitted against a milestone with zero documentation

## Sample 1 — Cypress Landing at University Park (Yellow / catch-a-problem)
This is the lead sample behind the "View Sample Report" button.

### Project Overview
| Field | Value |
|---|---|
| Community | Cypress Landing at University Park HOA |
| Location | Sarasota/Bradenton corridor, FL |
| Community type | Master-planned HOA, 412 parcels |
| Project | Roadway Milling & Resurfacing — Phase 1 of 3 |
| Vendor | Gulf Coast Paving & Sealcoat, LLC |
| Contract executed | March 9, 2026 |
| Target completion | August 15, 2026 |
| Manager of record | K. Delgado, CAM |

### Budget Summary
| Line | Amount |
|---|---|
| Approved budget | $195,000 |
| Contract amount | $182,400 |
| Billed to date | $118,500 (65.0% of contract) |
| Paid to date | $72,960 |
| Remaining contract balance | $63,900 |
| Budget remaining vs. approved | $76,500 |
| Pending change orders | $4,800 (unapproved) |

### Billing vs. Progress
- **Billed:** 65% • **Documented complete:** 48%
- **Status: 🟡 YELLOW** — billing is 17 points ahead of documented progress; Milestone 2 documentation incomplete.

### Milestone Status
| # | Milestone | Pay % | Due | Status | Photos |
|---|---|---|---|---|---|
| 1 | Mobilization, MOT setup, base repair — north loop | 15% | Apr 3 | ✅ Complete | 24 |
| 2 | Base repair — cul-de-sacs (Wren Ct, Ibis Ct), milling north loop | 25% | May 22 | ⚠️ Invoiced, docs incomplete | 6 |
| 3 | Milling south loop + first lift asphalt north | 25% | Jun 30 | 🔄 In progress | 11 |
| 4 | Final lift, both loops | 25% | Jul 31 | ⏳ Not started | 0 |
| 5 | Striping, signage, punch list, demobilization | 10% | Aug 15 | ⏳ Not started | 0 |

### Invoice Status
| Invoice | Milestone | Amount | Received | Status |
|---|---|---|---|---|
| GC-1042 | M1 | $27,360 | Apr 5 | Paid Apr 18 |
| GC-1067 | M2 | $45,600 | May 24 | **Hold** |
| GC-1071 | M3 (partial) | $45,540 | Jun 28 | Under review |

### Change Order Log
| CO # | Description | Amount | Status |
|---|---|---|---|
| CO-01 | Thermoplastic striping upgrade (vendor-initiated) | $4,800 | **Submitted without board approval** |

### Open Issues
1. No photo documentation of base repair at Wren Ct and Ibis Ct cul-de-sacs, both invoiced under Milestone 2.
2. CO-01 ($4,800) submitted after work discussion but before board approval; not authorized under contract §7.2.
3. Invoice GC-1071 bills partial Milestone 3 ahead of Milestone 2 closure.

### Manager Recommendation
> Release Milestone 2 payment **less the $4,800 change order**, contingent on (a) receipt of base-repair photos at both cul-de-sacs and (b) manager walkthrough scheduled July 11. Hold Invoice GC-1071 until Milestone 2 is closed. Present CO-01 for board vote at the July meeting.

### Next Steps
- [ ] Vendor to upload cul-de-sac base repair photos via upload link (sent Jul 6)
- [ ] Manager walkthrough — Jul 11, 8:00 AM
- [ ] Board vote on CO-01 — Jul 16 meeting
- [ ] Re-run report after walkthrough

## Sample 2 — Harbour Pointe Condominium (Green / regulatory-hook)

### Project Overview
| Field | Value |
|---|---|
| Community | Harbour Pointe Condominium Association |
| Location | Venice, FL |
| Community type | Mid-rise condominium, 4 stories, 3 buildings, 96 units |
| Project | Concrete Restoration, Balcony Waterproofing & Exterior Repaint (SIRS-driven) |
| Vendor | Suncoast Structural Restoration, Inc. |
| Engineer of record | Bayline Engineering Group |
| Contract executed | April 20, 2026 |
| Target completion | February 2027 |
| Manager of record | R. Whitfield, CAM |

### Budget Summary
| Line | Amount |
|---|---|
| Approved budget | $438,000 |
| Contract amount | $412,700 |
| Billed to date | $96,000 (23.3%) |
| Paid to date | $96,000 |
| Remaining contract balance | $316,700 |
| Change orders to date | $0 |

### Billing vs. Progress
- **Billed:** 23% • **Documented complete:** 22%
- **Status: 🟢 GREEN**

### Milestone Status
| # | Milestone | Pay % | Due | Status | Photos |
|---|---|---|---|---|---|
| 1 | Mobilization, engineering survey, spall mapping | 10% | May 15 | ✅ Complete | 41 |
| 2 | Concrete restoration — Building A | 20% | Jul 20 | 🔄 In progress (60%) | 28 |
| 3 | Concrete restoration — Building B | 20% | Sep 30 | ⏳ Pending engineer sign-off | 9 |
| 4 | Balcony waterproofing — all buildings | 20% | Nov 30 | ⏳ Not started | 0 |
| 5 | Exterior repaint — all buildings | 20% | Jan 2027 | ⏳ Not started | 0 |
| 6 | Final engineer certification, punch list | 10% | Feb 2027 | ⏳ Not started | 0 |

### Invoice Status
| Invoice | Milestone | Amount | Received | Status |
|---|---|---|---|---|
| SSR-2201 | M1 | $41,270 | May 18 | Paid Jun 1 |
| SSR-2214 | M2 (partial) | $54,730 | Jun 25 | Paid Jul 2 |

### Manager Recommendation
> Project is on schedule and billing reconciles with documented progress. Do not accept Milestone 3 invoicing until Bayline's Building B sign-off is on file — this document is part of the association's SIRS/milestone-inspection record.

## Sample 3 — Palm Aire Villas (Green close-out / contractor-friendly)

### Project Overview
| Field | Value |
|---|---|
| Community | Palm Aire Villas Homeowners Association |
| Location | Palmetto, FL |
| Community type | 55+ community, 188 villas |
| Project | Pool Resurfacing & Paver Deck Replacement |
| Vendor | Manatee Pool & Paver Co. |
| Contract executed | February 2, 2026 |
| Completed | May 29, 2026 |
| Manager of record | T. Okafor, CAM |

### Budget Summary
| Line | Amount |
|---|---|
| Approved budget | $72,000 |
| Contract amount | $67,300 |
| Billed to date | $67,300 (100%) |
| Paid to date | $60,570 |
| Retainage held | $6,730 (10%) |
| Change orders | $0 |
| Final cost vs. budget | **$4,700 under budget** |

### Billing vs. Progress
- **Billed:** 100% • **Documented complete:** 100%
- **Status: 🟢 GREEN** — recommend final payment and retainage release.

### Milestone Status
| # | Milestone | Pay % | Due | Status | Photos |
|---|---|---|---|---|---|
| 1 | Drain, chip-out, surface prep | 20% | Mar 6 | ✅ Complete | 18 |
| 2 | Plumbing/light inspection, resurface application | 30% | Apr 10 | ✅ Complete | 22 |
| 3 | Paver deck demo & replacement | 30% | May 8 | ✅ Complete | 31 |
| 4 | Fill, startup chemistry, deck sealing, punch list | 20% | May 29 | ✅ Complete | 17 |

### Manager Recommendation
> All milestones fully documented with 88 timestamped photos. Work completed on schedule and $4,700 under approved budget. **Recommend board approve final payment MPP-137 and release retainage at the June meeting.** Vendor documentation quality was excellent; recommend Manatee Pool & Paver for future bid lists.

## Design
- Keep the same professional teal/gray color scheme as the landing page
- Each report should look print-friendly (clean white background, good typography)
- Placeholder photo tiles: grey box with timestamp text overlay like "Apr 3, 2026 • 8:42 AM • Milestone 1"
- Status badges: Green/Yellow/Red with dot indicators
- Print-friendly with @media print styles

After building all three pages, update the hero section in index.tsx to link to /sample-report and add the three sample teasers with their copy hooks.

Run `bun run publish` when done.