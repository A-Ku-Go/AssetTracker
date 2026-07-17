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
