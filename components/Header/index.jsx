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
      <Link href="/nextAuth">
        <a className={styles.anchor}>NextAuth</a>
      </Link>
      <Link href="/todo">
        <a className={styles.anchor}>Todo</a>
      </Link>
      <Link href="/chatApp">
        <a className={styles.anchor}>ChatApp</a>
      </Link>
      <Link href="/practice">
        <a className={styles.anchor}>practice</a>
      </Link>
    </header>
  );
}
