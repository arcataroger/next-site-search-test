import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>This is an apple</h1>
          <p>Apples are for people who like silicon.</p>
        </div>
      </main>
    </div>
  );
}
