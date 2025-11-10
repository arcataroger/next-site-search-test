import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>This is an orange</h1>
          <p>Orange is both a color and a fruit.</p>
        </div>
      </main>
    </div>
  );
}
