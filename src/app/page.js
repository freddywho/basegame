import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>44</div>
      <ul>
        <li className={styles.bluey}>Buenisimo</li>
        <li className={styles.mamamia}>Ricisimo</li>
      </ul>
      <button>click me</button>
      <button>click hurr</button>
      <button>right thurr</button>
    </div>
  );
}
