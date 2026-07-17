# 📦 AssetFlow: Enterprise Resource & Asset Management Platform

![Status](https://img.shields.io/badge/Status-Active_Development-orange)
![Python](https://img.shields.io/badge/Python-3.14-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.139.x-009688)
![React](https://img.shields.io/badge/React-19.x-61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.x-336791)

AssetFlow is a production-grade, full-stack B2B asset management platform designed to track high-value physical hardware, manage software licenses, and maintain immutable compliance audit logs across complex, multi-tiered corporate structures. 

Built as a highly decoupled, two-developer collaborative monorepo, the system simulates enterprise engineering constraints by tackling hierarchical data structures, asynchronous compute offloading, database transactional isolation, and performant frontend data virtualization.

---

## 🏛️ System Architecture

AssetFlow employs a **Layered Architecture Pattern** that strictly isolates concerns. The UI layer communicates with the web server via a strongly typed REST contract, while heavy database computations are entirely offloaded to an out-of-band asynchronous worker pool.

```text
                  ┌─────────────────────────────────────────┐
                  │             Frontend Client             │
                  │   React 19 / TypeScript / Vite / Zod    │
                  └────────────────────┬────────────────────┘
                                       │
                              HTTPS / REST API
                                       │
                  ┌────────────────────▼────────────────────┐
                  │              API Gateway                │
                  │                FastAPI                  │
                  └──────────────┬───────────────────┬──────┘
                                 │                   │
                          Broker Tasks         Queries / Writes
                                 │                   │
  ┌──────────────────────────────▼───┐     ┌─────────▼─────────────────────┐
  │      Background Task Queue       │     │       Relational Data         │
  │      Celery + Redis Broker       │     │ PostgreSQL + SQLAlchemy 2.0   │
  └──────────────────────────────────┘     └───────────────────────────────┘

```

## ✨ Core Engineering Highlights
Dynamic Hierarchical Locations: Implements an adjacency-list model using recursive Common Table Expressions (CTEs) in PostgreSQL to map assets down to deeply nested micro-environments (e.g., Global HQ ➔ Building 3 ➔ Floor 2 ➔ Server Room ➔ Rack B).

Immutable Transactional Auditing: Uses SQLAlchemy lifecycle event listeners to automatically generate cryptographically sound, unalterable event snapshots in an AuditLogs table whenever any asset undergoes modification, transfer, or retirement.

Asynchronous Compute Pipelines: Integrates Celery and Redis to handle heavy background cron workers that compute weekly straight-line asset financial depreciation curves without blocking client-facing web threads.

Server-Side Virtualized Pagination: Employs cursor-based server pagination and query optimization hooks (joinedload/selectinload) to eliminate N+1 database roundtrips, ensuring instantaneous rendering for thousands of rows.

Granular RBAC Security: Features rigorous role-based routing controls utilizing FastAPI dependencies to decode JWT access tokens from secure HttpOnly cookies, presenting distinct dashboard configurations for Administrators and Employees.

## 🛠️ Tech Stack & Dependencies
Backend Tier (Developer A)
Runtime: Python 3.14.x

Web Framework: FastAPI 0.139.x

Database & Async ORM: PostgreSQL + SQLAlchemy 2.0.51

Database Migrations: Alembic 1.14.x

Task Queue & Broker: Celery 5.4.x + Redis 5.2.x

Data Validation: Pydantic 2.10.x

Database Driver: Psycopg3 3.2.x

Frontend Tier (Developer B)
Runtime & Package Tooling: Node.js 26.x.x + Vite 6.x.x

Core Library: React 19.x.x + TypeScript 5.7.x

Server Caching & Hooks: TanStack Query (React Query) 5.64.x

Data Visualization: Recharts 2.15.x

Styling Component Engine: Tailwind CSS 4.x.x + shadcn/ui

Form Management: React Hook Form + Zod

## 📂 Repository Workspace Structure
The project codebases are cleanly decoupled into distinct structural domains within the monorepo to minimize version control conflicts between teammates.

assetflow-monorepo/
├── backend/                  # Developer A Context
│   ├── app/
│   │   ├── api/              # API Route endpoints & HTTP contracts
│   │   ├── core/             # Auth config, JWT encoding, security helpers
│   │   ├── models/           # SQLAlchemy Declarative Database Models
│   │   ├── schemas/          # Pydantic schema validation structures
│   │   ├── repositories/     # Data access layer isolation (SQL patterns)
│   │   ├── services/         # Domain-level business logic
│   │   └── main.py           # Application bootstrapper
│   ├── alembic/              # DB migration timeline scripts
│   └── Dockerfile
└── frontend/                 # Developer B Context
    ├── src/
    │   ├── components/       # Reusable atomic UI blocks (Tables, Modals)
    │   ├── context/          # Client-side authorization state engines
    │   ├── hooks/            # TanStack Query server abstraction layers
    │   ├── layouts/          # Responsive application shells (Sidebar, Nav)
    │   ├── pages/            # Page-view modules (Inventory, Audits, Analytics)
    │   └── types/            # Extracted TypeScript server-shape definitions
    └── Dockerfile

## ⚙️ Local Infrastructure Setup
This monorepo utilizes Docker Compose to guarantee unified, predictable container states across developer machines. Ensure you have Docker Desktop installed.

Clone the repository:
git clone [https://github.com/A-Ku-Go/AssetFlow.git](https://github.com/A-Ku-Go/AssetFlow.git)
cd AssetFlow

Initialize Environment Variables:
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env

Spin Up the Containers:
docker-compose up --build

Verify Live Access Ports:
Frontend Client Interface: http://localhost:5173
Interactive OpenAPI API Documentation: http://localhost:8000/docs
Local PostgreSQL Database Instance: localhost:5432

## 👥 Division of Labor & Team Contributions
AssetFlow was intentionally built as a two-person engineering team to replicate professional collaborative workflows:

[A-Ku-Go / Developer A] — Backend Systems & Database Architecture:
Responsible for modeling the relational database core, orchestrating the FastAPI execution loop, writing database triggers/event-hooks for unalterable system logs, establishing JWT token authentication pipelines, and structuring async Celery task queues.

[KrishnaCreator74 / Developer B] — Frontend Engineering & Client State UX:
Responsible for designing the single-page web app infrastructure, integrating TanStack Query for background cache synchronization, implementing complex schema form controls via Zod, and building high-fidelity visual monitoring dashboards with Recharts and Tailwind CSS.

## 🚧 Sprint Roadmap & Current Status
[ ] Initial system architecture design and Docker multi-container bootstrapping.

[ ] Asynchronous SQLAlchemy database models and Alembic migration tracking.

[ ] JWT cookie authentication logic and backend RBAC route decorators.

[ ] Implement server-side virtual pagination queries for asset indexes.

[ ] Build out dynamic hierarchical table UI modules using shadcn/ui.

[ ] Configure Redis/Celery queue for offloaded depreciation PDF tasks.

[ ] Write integration test suites (Pytest / Playwright) and configure CI/CD.

[ ] Production cloud deployment (Render Web Services & Vercel Client).
