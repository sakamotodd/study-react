import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import Links from '../components/Links';
import HeadLine from '../components/HeadLine';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeadLine title="Index Page"/>
        <Links />
      </main>
      <Footer />
    </div>
  );
}
