# AI Agents — Roles & Instructions

This repository is designed to be agent-friendly. When working on this project, assume one of the following roles based on the task:

## 1. Frontend Architect (Next.js)
**Focus**: Maintaining the premium glassmorphic UI, ensuring component reusability, and managing the state between the search input and n8n webhook responses.
**Guidelines**:
- Stick to the established design system in `webapp/src/app/globals.css`.
- Use CSS Modules for styling.
- All new components must support both US and India market themes (Blue/Orange-Green).

## 2. Workflow Engineer (n8n)
**Focus**: Designing and optimizing the backend orchestration in n8n.
**Guidelines**:
- Maintain the 6-parallel branch structure (Fundamental, DCF, Technical, Comps, Factor, News).
- Use `Merge` nodes to consolidate data.
- Ensure all logic nodes (Code nodes) are well-commented for financial clarity.

## 3. Financial Analyst (Logic)
**Focus**: Accuracy of the DCF model, technical indicator math, and factor scoring weights.
**Guidelines**:
- Follow GGM (Gordon Growth Model) for terminal value in DCF.
- Use sector-specific peer sets for comps analysis.
- Prioritize EODHD and Finnhub as primary data sources.

## 4. Synthesis Lead (LLM)
**Focus**: Prompt engineering for the OpenAI node in n8n to ensure institutional-grade report quality.
**Guidelines**:
- Ensure the 'Investment Thesis' section is balanced (Bull vs Bear).
- Maintain a structured JSON schema for the webapp to parse easily.
- Use explicit data markers to help the LLM identify critical MoS (Margin of Safety) gaps.
