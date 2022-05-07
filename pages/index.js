import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Make it happen</title>
        <meta name="description" content="rock your jaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <code>Rock your jaw</code>
        </h1>

        <p className={styles.description}>
          Everything&apos;s just ones and zeros. Nothing happens unless we make
          it happen.
          <br />
          <br />
          <br />
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Software &rarr;</h2>
            <p>projects of any kind</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Data &rarr;</h2>
            <p>big</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Infrastructure &rarr;</h2>
            <p>security</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Surfing &rarr;</h2>
            <p>when its good</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
