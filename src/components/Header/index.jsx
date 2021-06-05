import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.anchor}>Index</a>
      </Link>
      <Link href="/about">
        <a className={styles.anchor}>about</a>
      </Link>
      <Link href="/practice">
        <a className={styles.anchor}>practice</a>
      </Link>
      <Link href="/sample">
        <a className={styles.anchor}>sample</a>
      </Link>
    </header>
  );
}
