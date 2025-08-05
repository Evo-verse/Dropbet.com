# 10. Deployment & CI/CD

## 10.1 Environments

- **Development:** `npm run dev` with `.env.development`  
- **Staging:** Mirror prod, sandbox API keys  
- **Production:** Locked down, strict access

## 10.2 Continuous Integration

- GitHub Actions / GitLab CI runs ESLint, Stylelint, tests on PRs  
- Prettier enforcement via CI

## 10.3 Continuous Deployment

- `npm run build` → Docker multi-stage build → push to registry  
- Rolling updates via Kubernetes/ECS or SSH scripts  
- Env vars via Kubernetes secrets or similar  
- Health checks & rollback on failure

## 10.4 Scalability & Maintenance

- Horizontal scaling of Next.js + socket pub/sub (Redis)  
- DB replicas, indexes, migrations (`prisma migrate deploy`)  
- Backups, log rotation, Sentry & uptime monitoring  
- Developer onboarding: README with env var list, Docker Compose for local services

[← Home](readme.md)