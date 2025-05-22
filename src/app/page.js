import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div>44</div>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
      </ul>
      <button>click me</button>
      <button>click me</button>
      <button>click me</button>
      <button>click</button>
    </div>
  );
}
