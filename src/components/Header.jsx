import { DarkModeToggle } from './DarkModeToggle';
import styles from './Header.module.css';

/**
 * Header with toggle in top-right, near profile area. JIRA: UI Location (JDEMO-2644)
 */
export function Header() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.brand}>EREZ-DARK-MODE</div>
      <div className={styles.actions}>
        <DarkModeToggle />
        <div className={styles.profile} aria-hidden>
          <span className={styles.avatar} title="User profile">👤</span>
        </div>
      </div>
    </header>
  );
}
