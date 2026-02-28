# Project Skills — Expertise & Knowledge

This project requires specific domain expertise to maintain and extend. AI agents should reference this file before making changes to analysis logic.

## 1. DCF Valuation (Discounted Cash Flow)
**Expertise Needed**: Financial modeling, WACC (Weighted Average Cost of Capital) calculation, Terminal Value estimation.
**Implementation**:
- **FCF Projection**: 5-year historical CAGR normalized for cyclicals.
- **Terminal Value**: Gordon Growth Model (GGM) using a terminal growth rate (typically 2-3% for US, 4-5% for India).
- **Discount Rate**: Risk-free rate (US 10Y / India 10Y) + Beta-adjusted Equity Risk Premium.
- **Margin of Safety**: Intrinsic Value vs. Current Market Price.

## 2. Technical Analysis
**Expertise Needed**: Trend analysis, oscillator interpretation.
**Implementation**:
- **RSI**: Thresholds at 30 (Oversold) and 70 (Overbought).
- **MACD**: Signal line crossovers and histogram divergence.
- **Moving Averages**: Death Cross vs. Golden Cross (50/200 SMA).
- **Bollinger Bands**: Volatility expansion/contraction.

## 3. Factor Scoring
**Expertise Needed**: Quantitative finance, factor-based investing.
**Implementation**:
- **Quality Factor**: ROE, ROIC, Debt-to-Equity ratios.
- **Value Factor**: P/E, EV/EBITDA, P/FCF percentile vs. sector history.
- **Momentum Factor**: 3, 6, and 12-month relative strength.
- **Growth Factor**: Revenue and EPS CAGR (3-year).

## 4. Multi-Market Routing
**Expertise Needed**: Global market structures and ticker formatting.
**Implementation**:
- **US Tickers**: Pure uppercase (e.g., AAPL, NVDA).
- **India Tickers**: NSE/BSE suffixes (e.g., RELIANCE.NS, TCS.BO).
- **Logic**: IF nodes in n8n route to specific sub-workflows for Indian vs. US financials (since line items differ).
