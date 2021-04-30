import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import Links from '../components/Links';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Index page </h1>
        <Link href="/about">
          <a>about page GO!!!</a>
        </Link>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
