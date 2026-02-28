# Project Context — EquiPulse

This document provides the high-level context and architectural mental model for AI agents working on this project.

## 🏢 Project Goal
To build a **local-first, professional-grade equity research tool** that automates the "grunt work" of fundamental and technical analysis, providing institutional-quality reports for US and Indian stocks.

## 🏗 System Architecture (High Level)
The system is split into two main layers:

1. **Frontend (The Brain/UI)**:
   - Next.js 15 app located in `webapp/`.
   - Handles ticker selection, market routing, and report visualization.
   - Design philosophy: **Premium Glassmorphism**.
   - State management: Reactive UI that updates based on n8n webhook feedback.

2. **Orchestrator (The Engine)**:
   - n8n workflow engine located (externally/to-be-provided) at `localhost:5678`.
   - Orchestrates parallel fetching from EODHD, Finnhub, Alpha Vantage, and indianapi.in.
   - Performs complex financial logic in JavaScript nodes.
   - Synthesizes all data using OpenAI.

## 📂 Project Structure
```bash
equity-research/
├── .ai/              # AI Agent-specific documentation
├── webapp/           # Next.js frontend project
├── n8n/              # (Planned) n8n workflow exports
└── README.md         # Developer setup & project overview
```

## 🛠 Design Principles
- **Accuracy First**: Data must be cross-referenced across multiple APIs.
- **Speed to Insight**: Reports should be generated in < 10 seconds.
- **Deep Valuation**: Avoid "surface-level" analysis; always include intrinsic value (DCF).
- **Global Reach**: Seamlessly pivot between US and Indian market themes/formats.

## 🚦 Phase Status
- **Phase 1 (Repo Setup)**: Complete.
- **Phase 2 (Web App UI)**: Complete (using mock data).
- **Phase 3 (n8n Workflow)**: In-Progress.
