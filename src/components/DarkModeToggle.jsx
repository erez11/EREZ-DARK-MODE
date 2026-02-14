import { useTheme } from '../context/ThemeContext';
import styles from './DarkModeToggle.module.css';

/**
 * Checkbox-style toggle with Sun/Moon icon and tooltip.
 * JIRA: Components (JDEMO-2645), Accessibility (JDEMO-2648)
 */
export function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={styles.wrapper}>
      <span className={styles.tooltip} role="tooltip" id="dark-mode-tooltip">
        Toggle Dark Mode
      </span>
      <button
        type="button"
        className={styles.toggle}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        aria-pressed={isDark}
        aria-describedby="dark-mode-tooltip"
        title="Toggle Dark Mode"
      >
        <span className={styles.track} aria-hidden>
          <span className={styles.thumb} />
        </span>
        <span className={styles.icon} aria-hidden>
          {isDark ? '🌙' : '☀️'}
        </span>
      </button>
    </div>
  );
}
