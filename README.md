# Next Software Development Company

Next.js site with GitHub Actions CI/CD → VPS (PM2 `NEXT`, port `9000`).

## Getting Started

```bash
npm install
npm run dev
```

## CI/CD

Workflow: [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml)

Triggers on push to **`main`** (or **Actions → Run workflow**):

1. Code Quality (lint / audit)  
2. Build  
3. Manual approval (`production` environment)  
4. Deploy to VPS with rollback  
5. Verify live site  
6. Emergency rollback if verify fails  
7. Summary  

### Secrets (already configured)

| Secret | Description |
| --- | --- |
| `VPS_HOST` | VPS IP / hostname |
| `VPS_USER` | SSH username |
| `VPS_SSH_KEY` | Private SSH key |
| `VPS_PORT` | Optional SSH port |
| `DEPLOY_PATH` | Optional; default `/var/www/NEXT` |

### Notes

- PM2 process name: **`NEXT`**
- Health check: `http://127.0.0.1:9000`
- Ensure Next/`PORT` on the VPS listens on **9000** (or Nginx proxies correctly)
- Add required reviewers on GitHub **Settings → Environments → production** for real manual approval
- If Actions jobs stay “waiting for runner”, check [githubstatus.com](https://www.githubstatus.com) (outages block all workflows)
