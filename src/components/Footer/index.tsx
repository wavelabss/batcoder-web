import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.FooterSection}>
      <main>
        <div className={styles.FooterIcons}>
          <a href=""><img src="/images/icons/github.svg" alt=""/></a>
          <a href=""><img src="/images/icons/instagram.svg" alt=""/></a>
          <a href=""><img src="/images/icons/linkedin.svg" alt=""/></a>
        </div>
        <div className={styles.FooterLogo}>
          <img src="/images/logo-black-white.svg" alt="BATcoder" title="BATcoder" />
        </div>
      </main>
    </footer>
  )
}
