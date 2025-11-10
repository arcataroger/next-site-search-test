import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>This page is forbidden</h1>
          <p>It should not be indexed</p>
        </div>
      </main>
    </div>
  );
}
