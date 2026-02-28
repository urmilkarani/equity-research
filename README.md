# Equity Research System 📈

An institutional-grade local equity research platform that combines fundamental, technical, and sentiment analysis with automated DCF valuation and AI synthesis.

## 🚀 Overview
This system allows investors to perform deep-dive research on US and Indian equities. It uses a Next.js frontend to trigger a complex n8n workflow that orchestrates data fetching from multiple professional APIs and synthesizes the findings into a structured report using OpenAI GPT-4o.

### Key Features
- **Global Coverage**: Supports both US (NYSE/NASDAQ) and Indian (NSE/BSE) markets.
- **Intrinsic Valuation**: Automated 3-scenario DCF (Bull/Base/Bear) with sensitivity analysis.
- **Technical Analysis**: Real-time indicators (RSI, MACD, SMA 50/200, Bollinger Bands).
- **Factor Scoring**: Quantitative 1-10 scores on Quality, Value, Momentum, and Growth.
- **AI Narrative**: High-level investment thesis synthesized by GPT-4o.
- **Premium UI**: Glassmorphic dark-mode dashboard with real-time analysis status updates.

## 🛠 Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript, CSS Modules.
- **Backend**: n8n (Local workflow engine).
- **APIs**:
  - [EODHD](https://eodhd.com/): Fundamentals & Technicals.
  - [Alpha Vantage](https://www.alphavantage.co): Technical Indicators.
  - [Finnhub](https://finnhub.io): News, Insider Transactions & ESG.
  - [indianapi.in](https://indianapi.in): India-specific financials.
  - [OpenAI](https://openai.com): GPT-4o for report synthesis.

## 📦 Getting Started

### 1. Prerequisites
- Node.js (v20+)
- npm or pnpm
- A local instance of n8n running (`npx n8n start`)

### 2. Frontend Setup (Next.js)
```bash
cd equity-research/webapp
npm install
npm run dev
```
The app will be available at `http://localhost:3000`.

### 3. Backend Setup (n8n)
- Start n8n: `npx n8n start`
- Import the workflow JSON (to be provided in `n8n/` directory).
- Ensure the webhook URL in the Next.js app matches your local n8n instance (default: `http://localhost:5678/webhook/equity-research`).

### 4. API Keys
Create a `.env.local` file in `webapp/` and add your keys (once the n8n workflow is fully configured, these will primarily live in n8n credentials):
- `OPENAI_API_KEY`
- `EODHD_API_KEY`
- `ALPHAVANTAGE_API_KEY`
- `FINNHUB_API_KEY`

## 🏗 Architecture
The system follows a C4-inspired container architecture:
1. **Web App**: User interface for stock selection and report rendering.
2. **n8n Webhook**: Orchestrator that triggers 6 parallel analysis branches.
3. **AI Synthesis**: Merges all data branches into a final institutional-grade Markdown/JSON report.

---
Created with ❤️ by Antigravity
