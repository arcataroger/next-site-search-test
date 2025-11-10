import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Unlisted page</h1>
          <p>This page is not linked to from other pages</p>
        </div>
      </main>
    </div>
  );
}
