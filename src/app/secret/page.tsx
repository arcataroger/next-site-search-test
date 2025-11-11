import styles from "../page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Secret page</h1>
          <p>This should only be discoverable to Dato</p>
        </div>
      </main>
    </div>
  );
}
