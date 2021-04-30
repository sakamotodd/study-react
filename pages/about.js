import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import Links from '../components/Links';

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>about page </h1>
        <Link href="/">
          <a>Index page GO!!!</a>
        </Link>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
