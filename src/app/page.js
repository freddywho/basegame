import Image from "next/image";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.flag}>
      <div className={styles.circle}></div>
    </div>
  );
}




/*

For every tag, there's an opening tag and a closing tag
<div>
bueno (child)
</div>

*/