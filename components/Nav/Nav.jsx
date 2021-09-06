import Link from 'next/link'
import styles from './Nav.module.css'

function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>Logo</div>
      <ul className={styles.rightNav}>
        <li className={styles.link}>
          <Link href="/#projects">Projects</Link>
        </li>
        <li className={styles.link}>
          <Link href="/#blog">Blog</Link>
        </li>
        <li className={`${styles.contact} ${styles.link}`}>
          <Link href="/#contact">Contact Me</Link>
        </li>
      </ul>
    </header>
  )
}

export default Nav
