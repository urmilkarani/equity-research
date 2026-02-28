"use client";

import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import Search from '@/components/Search/Search';
import Report from '@/components/Report/Report';
import styles from './page.module.css';

const MOCK_REPORT = {
  ticker: 'AAPL',
  market: 'US',
  signal: 'BUY' as const,
  conviction: 'High' as const,
  targetPrice: 245.50,
  currentPrice: 182.30,
  fairValue: {
    bull: 280.40,
    base: 242.15,
    bear: 195.80,
  },
  metrics: {
    pe: 28.4,
    pb: 44.2,
    dividendYield: 0.005,
    debtToEquity: 1.45,
  },
  narrative: `Apple Inc. (AAPL) remains a cornerstone of the global technology sector. Our analysis suggests a strong BUY signal with a target price of $245.50, representing significant upside from current levels.\n\nFrom a fundamental perspective, Apple continues to demonstrate robust cash flow generation and industry-leading margins. The expansion of the Services segment (iCloud, Music, App Store) provides a high-margin, recurring revenue stream that buffers against hardware cycle volatility.\n\nThe DCF base case of $242.15 assumes a 5-year FCF CAGR of 8.5%, supported by the iPhone ecosystem and potential Vision Pro adoption. The healthy Margin of Safety across all scenarios indicates limited downside risk for long-term investors.`,
};

export default function Home() {
  const [report, setReport] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState<string>('Initializing Research...');
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (ticker: string, market: string) => {
    setIsLoading(true);
    setError(null);
    setReport(null);

    const statuses = [
      'Fetching fundamental data...',
      'Analyzing technical indicators...',
      'Computing 3-scenario DCF intrinsic value...',
      'Profiling comparable sector peers...',
      'Calculating factor scores (Quality/Value/Growth)...',
      'Synthesizing news sentiment via AI...',
      'Generating final institutional report...'
    ];

    try {
      console.log(`Searching for ${ticker} in ${market} market...`);

      // Rotate through status messages
      let statusIdx = 0;
      const interval = setInterval(() => {
        if (statusIdx < statuses.length) {
          setLoadingStatus(statuses[statusIdx]);
          statusIdx++;
        }
      }, 500);

      const response = await fetch('http://localhost:5678/webhook/equity-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ticker, market }),
      });

      clearInterval(interval);

      if (!response.ok) {
        throw new Error('n8n error');
      }

      const data = await response.json();
      setReport(data);
    } catch (err) {
      console.error(err);
      setError("Analysis failed. Please ensure your n8n workflow is active at http://localhost:5678");
    } finally {
      setIsLoading(false);
      setLoadingStatus('Initializing Research...');
    }
  };

  return (
    <div className="container">
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Institutional <span className={styles.gradientText}>Equity Research</span>.
          </h1>
          <p className={styles.subtitle}>
            Deep-dive fundamental, technical, and DCF analysis for US and Indian markets, synthesized by AI.
          </p>

          <Search onSearch={handleSearch} isLoading={isLoading} />
        </section>

        {isLoading && (
          <div className={`${styles.loadingSection} animate-fade-in`}>
            <div className={styles.spinner}></div>
            <p className={styles.statusText}>{loadingStatus}</p>
          </div>
        )}

        {error && (
          <div className={styles.errorBox}>
            {error}
          </div>
        )}

        {report && !isLoading && (
          <div className={`${styles.reportContainer} animate-fade-in`}>
            <Report data={report} />
          </div>
        )}
      </main>
    </div>
  );
}
