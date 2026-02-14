import { Header } from './components/Header';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main} role="main">
        <h1>Dark Mode Toggle</h1>
        <p>
          This app implements the EREZ-DARK-MODE design: toggle in the header (top-right),
          theme persistence in localStorage, and smooth transitions.
        </p>
      </main>
    </div>
  );
}

export default App;
