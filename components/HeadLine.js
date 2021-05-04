import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function HeadLine(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} page </h1>
      <p className={styles.description}>
        Get started by editing{'　'}
        {props.children}
      </p>
      <button onClick={() => alert(props.page)}>ボタン</button>
    </div>
  );
}
