import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.card}>
      <img
        src="/freddywho.jpg"
        alt="freddywho"
        className={styles.avatar}
      />
      <h2 className={styles.name}>freddywho</h2>
      <p className={styles.title}>Badass Coder</p>
      <p className={styles.description}>Passionate about a lot of things</p>
    </div>
  );
}









