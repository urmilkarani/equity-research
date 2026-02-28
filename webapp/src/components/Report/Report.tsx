import React from 'react';
import styles from './Report.module.css';

interface ReportProps {
    data: {
        ticker: string;
        market: string;
        signal: 'BUY' | 'SELL' | 'HOLD';
        conviction: 'High' | 'Medium' | 'Low';
        targetPrice: number;
        currentPrice: number;
        fairValue: {
            bull: number;
            base: number;
            bear: number;
        };
        metrics: {
            pe: number;
            pb: number;
            dividendYield: number;
            debtToEquity: number;
        };
        narrative: string;
    };
}

const Report: React.FC<ReportProps> = ({ data }) => {
    const signalClass =
        data.signal === 'BUY' ? styles.buySignal :
            data.signal === 'SELL' ? styles.sellSignal :
                styles.holdSignal;

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat(data.market === 'US' ? 'en-US' : 'en-IN', {
            style: 'currency',
            currency: data.market === 'US' ? 'USD' : 'INR',
        }).format(val);
    };

    const getMoS = (fair: number) => {
        const diff = ((fair - data.currentPrice) / data.currentPrice) * 100;
        return diff.toFixed(1);
    };

    return (
        <div className={styles.report}>
            {/* 1. Header & Signal */}
            <div className={styles.signalHeader}>
                <div className={styles.tickerInfo}>
                    <h2>{data.ticker}</h2>
                    <span className={styles.marketTag}>{data.market} MARKET</span>
                </div>
                <div className={`${styles.signalBadge} ${signalClass}`}>
                    {data.signal}
                    <div style={{ fontSize: '0.75rem', marginTop: '4px', opacity: 0.8 }}>
                        Conviction: {data.conviction}
                    </div>
                </div>
            </div>

            {/* 2. Key Metrics Grid */}
            <div className={styles.metricsGrid}>
                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Current Price</span>
                    <div className={styles.metricValue}>{formatCurrency(data.currentPrice)}</div>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Target Price</span>
                    <div className={styles.metricValue}>{formatCurrency(data.targetPrice)}</div>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>P/E Ratio</span>
                    <div className={styles.metricValue}>{data.metrics.pe.toFixed(2)}</div>
                </div>
                <div className={styles.metricCard}>
                    <span className={styles.metricLabel}>Div. Yield</span>
                    <div className={styles.metricValue}>{(data.metrics.dividendYield * 100).toFixed(2)}%</div>
                </div>
            </div>

            {/* 3. DCF Scenarios */}
            <div className={`${styles.section} glass`}>
                <h3 className={styles.sectionTitle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                    Intrinsic Valuation (DCF)
                </h3>
                <div className={styles.dcfGrid}>
                    <div className={styles.dcfCard}>
                        <div className={styles.dcfLabel}>BEAR CASE</div>
                        <div className={styles.dcfValue}>{formatCurrency(data.fairValue.bear)}</div>
                        <div className={styles.mos} style={{ color: Number(getMoS(data.fairValue.bear)) > 0 ? 'var(--accent-success)' : 'var(--accent-danger)' }}>
                            {getMoS(data.fairValue.bear)}% MoS
                        </div>
                    </div>
                    <div className={`${styles.dcfCard} ${styles.base}`}>
                        <div className={styles.dcfLabel}>BASE CASE</div>
                        <div className={styles.dcfValue}>{formatCurrency(data.fairValue.base)}</div>
                        <div className={styles.mos} style={{ color: Number(getMoS(data.fairValue.base)) > 0 ? 'var(--accent-success)' : 'var(--accent-danger)' }}>
                            {getMoS(data.fairValue.base)}% MoS
                        </div>
                    </div>
                    <div className={styles.dcfCard}>
                        <div className={styles.dcfLabel}>BULL CASE</div>
                        <div className={styles.dcfValue}>{formatCurrency(data.fairValue.bull)}</div>
                        <div className={styles.mos} style={{ color: Number(getMoS(data.fairValue.bull)) > 0 ? 'var(--accent-success)' : 'var(--accent-danger)' }}>
                            {getMoS(data.fairValue.bull)}% MoS
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. AI Investment Narrative */}
            <div className={`${styles.section} glass`}>
                <h3 className={styles.sectionTitle}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Investment Thesis & Analysis
                </h3>
                <div className={styles.narrative}>
                    {data.narrative.split('\n').map((para, i) => (
                        <p key={i}>{para}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Report;
