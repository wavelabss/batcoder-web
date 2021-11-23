import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'

import styles from './styles.module.scss'

export function Header() {
  const [click, setClick] = useState(false)
  const router = useRouter()

  function isActivePath(path: string) {
    return router.asPath.includes(path)
  }

  function handleClick(): void {
    setClick(!click)
  }

  async function handleNavigate(path: string): Promise<void> {
    setClick(false)
    await router.push(path)
  }

  return (
    <header className={styles.Container}>
      <div className={styles.Content}>
        <Link href="/">
          <img src="/images/logo-white-green.svg" alt="BATcoder" title="BATcoder" />
        </Link>
        <nav className={styles.NavWeb}>
          <Link href="/challenges">
            <a className={isActivePath('challenges') ? styles.active : undefined}>Desafios</a>
          </Link>
          <Link href="/community">
            <a className={isActivePath('community') ? styles.active : undefined}>Comunidade</a>
          </Link>
        </nav>
        <nav className={click ? styles.MenuMobileActive : styles.MenuMobileDisabled}>
          <a className={isActivePath('challenges') ? styles.active : undefined} onClick={async () => await handleNavigate('/challenges')}>Desafios</a>
          <a className={isActivePath('community') ? styles.active : undefined } onClick={async () => await handleNavigate('/community')}>Comunidade</a>
        </nav>
        <div className={styles.MenuIcon} onClick={handleClick}>
          {click
            ? <FaTimes />
            : <FaBars />
          }
        </div>
      </div>
    </header>
  )
}
