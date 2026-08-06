# Next Software Development Company

Next.js marketing site with GitHub Actions CI/CD → VPS (PM2 `NEXT`).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm start` | Production server (`127.0.0.1:3000`) |

## CI/CD

Workflow: [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml)

Push to **`main`** runs:

1. **Code Quality** — lint  
2. **Build** — `npm run build` on GitHub  
3. **Deploy** — SSH to VPS → pull `main` in `/var/www/NEXT` → `npm ci` → build → `pm2 reload NEXT` (auto-rollback on failure)  
4. **Verify** — HTTP check on the live site  
5. **Summary**

### GitHub secrets (already configured)

| Secret | Description |
| --- | --- |
| `VPS_HOST` | VPS IP / hostname |
| `VPS_USER` | SSH username |
| `VPS_SSH_KEY` | Private SSH key |
| `VPS_PORT` | Optional SSH port (default 22) |
| `DEPLOY_PATH` | Optional; defaults to `/var/www/NEXT` |

App is already running as PM2 process **`NEXT`**.
