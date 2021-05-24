import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

export function Header() {
  const router = useRouter()

  function isActivePath(path: string) {
    return router.asPath.includes(path)
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo-white-green.svg" alt="BATcoder" title="BATcoder" />
        </Link>
        <nav>
          <Link href="/challenges">
            <a className={isActivePath('challenges') ? styles.active : undefined}>Desafios</a>
          </Link>
          <Link href="/community">
            <a className={isActivePath('community') ? styles.active : undefined}>Comunidade</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
