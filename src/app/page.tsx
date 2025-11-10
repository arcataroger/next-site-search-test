import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>This is a test</h1>
          <p>Trying one of the following links</p>
          <Link href="/apple">This is a next/link to Apple</Link>
          <a href="/orange">This is a regular a link to Orange</a>
        </div>
      </main>
    </div>
  );
}
