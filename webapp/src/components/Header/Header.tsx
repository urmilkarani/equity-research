import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>ANTIGRAVITY.</div>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>Research</Link>
                <Link href="/about" className={styles.navLink}>About</Link>
                <Link href="/developers" className={styles.navLink}>Integrations</Link>
            </nav>
        </header>
    );
};

export default Header;
