import Link from 'next/link'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo-white-green.svg" alt="BATcoder" title="BATcoder" />
        </Link>
        <nav>
          <Link href="/challenges">
            <a className={styles.active}>Desafios</a>
          </Link>
          <Link href="/community">
            <a>Comunidade</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
