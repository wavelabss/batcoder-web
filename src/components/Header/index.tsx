import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
    <div className={styles.headerContent}>
        <img src="./images/logo.svg" alt="BATcoder" title="BATcoder" />
        <nav>
          <a className={styles.active} href="#">Desafios</a>
          <a href="#">Comunidade</a>
        </nav>
      </div>
    </header>
  )
}
