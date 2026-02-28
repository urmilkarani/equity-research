"use client";

import React, { useState } from 'react';
import styles from './Search.module.css';

interface SearchProps {
    onSearch: (ticker: string, market: string) => void;
    isLoading: boolean;
}

const Search: React.FC<SearchProps> = ({ onSearch, isLoading }) => {
    const [ticker, setTicker] = useState('');
    const [market, setMarket] = useState<'US' | 'IN'>('US');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (ticker.trim()) {
            onSearch(ticker.trim().toUpperCase(), market);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.marketToggle}>
                <button
                    className={`${styles.marketBtn} ${market === 'US' ? styles.activeUS : ''}`}
                    onClick={() => setMarket('US')}
                >
                    🇺🇸 US Market
                </button>
                <button
                    className={`${styles.marketBtn} ${market === 'IN' ? styles.activeIN : ''}`}
                    onClick={() => setMarket('IN')}
                >
                    🇮🇳 India Market
                </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder={market === 'US' ? "Search US Ticker (e.g. AAPL, NVDA)" : "Search India Ticker (e.g. RELIANCE, TCS)"}
                    className={styles.searchInput}
                    value={ticker}
                    onChange={(e) => setTicker(e.target.value)}
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className={styles.searchBtn}
                    disabled={isLoading || !ticker.trim()}
                >
                    {isLoading ? 'Analysing...' : 'Research'}
                </button>
            </form>
            <div className={styles.subText}>
                Institutional-grade fundamental + technical + DCF analysis
            </div>
        </div>
    );
};

export default Search;
