import Head from 'next/head';
import styles from '../styles/Home.module.css';
import{Main} from '../components/Main';
import {Footer} from '../components/Footer'

export default function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page="about" />
      <Footer/>
    </div>
  );
}
