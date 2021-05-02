import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import Links from '../components/Links';
import HeadLine from '../components/HeadLine';

export default function about(props) {
  console.log(props)
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <HeadLine title="about Page" />
        <Links />
      </main>
      <Footer />
    </div>
  )
}
