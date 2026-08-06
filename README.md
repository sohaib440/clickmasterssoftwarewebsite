# Next Software Development Company

Next.js marketing site with contact API and GitHub Actions CI/CD deploying to a VPS with PM2.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000).

Create a `.env` on the server (or locally) with `SMTP_*` / `CONTACT_TO_EMAIL` for the contact form.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm start` | Production server (binds `127.0.0.1:3000`) |

## CI/CD (GitHub → VPS + PM2)

Workflow: [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml)

**Flow when you push to `master`:**

1. Lint → production build  
2. Fast-forward GitHub `main` to match `master`  
3. SSH into the VPS, pull `main` in `/var/www/NEXT`, build, `pm2 reload`

Pushing directly to `main` runs the same quality checks and deploy (without the sync step).

### GitHub repository secrets

| Secret | Example | Required |
| --- | --- | --- |
| `VPS_HOST` | `203.0.113.10` | Yes |
| `VPS_USER` | `deploy` | Yes |
| `VPS_SSH_KEY` | Private key PEM | Yes |
| `VPS_PORT` | `22` | No (default 22) |
| `DEPLOY_PATH` | `/var/www/NEXT` | No (default `/var/www/NEXT`) |

Generate a deploy key on your machine, add the **public** key to the VPS `~/.ssh/authorized_keys`, and paste the **private** key into `VPS_SSH_KEY`.

### One-time VPS setup

```bash
# Node 20+, git, and PM2
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git
sudo npm install -g pm2

sudo mkdir -p /var/www/NEXT
sudo chown -R "$USER":"$USER" /var/www/NEXT
cd /var/www/NEXT
git clone git@github.com:YOUR_ORG/YOUR_REPO.git .
git checkout main

nano .env   # set SMTP_* / CONTACT_TO_EMAIL

npm ci
npm run build
pm2 start npm --name next-software -- start
pm2 save
pm2 startup   # follow the printed command
```

Point Nginx (or Caddy) at `http://127.0.0.1:3000`. Keep the app bound to localhost; do not expose port 3000 publicly.
