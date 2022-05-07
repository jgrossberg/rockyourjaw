import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
        <header>
        <ul>
          <a href="/about">About</a>
        </ul>
        </header>
      <Head>
        <title>Make it happen</title>
        <meta name="description" content="rock your jaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <code>You about to find out</code>
        </h1>

        <p className={styles.description}>
          Everything&apos;s just ones and zeros. Nothing happens unless we make it happen.
          <br/><br/><br/><code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Jonah &rarr;</h2>
            <p>experience?</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
