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
      <h6 className={styles.sammich}>no clicky</h6>
      <button>click hurr</button>
      <button>right thurr</button>
    </div>
  );
}


/*

For every tag, there's an opening tag and a closing tag
<div>
bueno (child)
</div>

*/