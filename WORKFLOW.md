# VendorProof HOA — Code Workflow

## Branch Strategy
- All work happens on feature branches off `main`
- Branch naming: `feat/short-description` or `fix/short-description`
- Members push their feature branch and create a PR to `main`

## PR Process
1. Developer pushes feature branch and opens a PR
2. Lead reviews the PR and either:
   - Approves and merges (squash merge)
   - Requests changes with feedback
3. The developer addresses feedback and updates the PR
4. Lead merges once approved

## Site Deployment
- The site at /home/team/shared/site serves on port 3000
- After local changes, run `bun run publish` from /home/team/shared/site to rebuild and restart
- Vercel production deployment is handled separately via `bun run go-live`

## Quality
- PRs should include basic responsive testing
- No console.logs or debug code in merged PRs
- Mobile-first design