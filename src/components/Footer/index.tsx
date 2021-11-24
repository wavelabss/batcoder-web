import Link from 'next/link'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.FooterSection}>
      <main>
        <div className={styles.FooterIcons}>
          <a href="https://github.com/wavelabss" target="_blank" rel="noreferrer"><img src="/images/icons/github.svg" alt="Logo GitHub" /></a>
          <a href="https://www.instagram.com/_wavelabs/" target="_blank" rel="noreferrer"><img src="/images/icons/instagram.svg" alt="Logo Instagram" /></a>
          <a href="https://www.linkedin.com/company/wave-labs" target="_blank" rel="noreferrer"><img src="/images/icons/linkedin.svg" alt="Logo Linkedin"/></a>
        </div>
        <div className={styles.FooterLogo}>
          <Link href="/">
            <img src="/images/logo-black-white.svg" alt="BATcoder" title="BATcoder" />
          </Link>
        </div>
      </main>
    </footer>
  )
}
