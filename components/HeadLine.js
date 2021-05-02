import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HeadLine(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.title} </h1>
      <Link href="/about">
        <a>{props.title} GO!!!</a>
      </Link>
      <p className={styles.description}>
        Get started by editing{"　"}
        <code className={styles.code}>pages/{props.title}</code>
      </p>
    </div>
  );
}
