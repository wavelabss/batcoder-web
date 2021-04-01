import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface CallTheActionProps {
  children: ReactNode
}

export function CallTheAction({ children }: CallTheActionProps) {
  return (
    <main className={styles.CTAContainer}>
      {children}
    </main>
  )
}
