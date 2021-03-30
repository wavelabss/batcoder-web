import styles from './styles.module.scss'

interface CallTheActionProps {
  title: string,
  subtitle?: string,
  textButton: string,
  imgPath?: string,
}

export function CallTheAction({ title, subtitle, textButton, imgPath}: CallTheActionProps)  {
  return (
    <main className={styles.CTAContainer}>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <button>{textButton}</button>
      {imgPath && <img src={imgPath} alt=""/>}
    </main>
  )
}
