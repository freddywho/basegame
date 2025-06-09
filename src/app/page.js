import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <a
        href="https://www.zillow.com/homedetails/0-L-Kachemak-Bay-15-Homer-AK-99603/448273625_zpid/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.externalLink}
      >
        Not Japan
      </a>
    </div>
  );
}











