import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface CardCreatersProps {
  children: ReactNode
}

export function CardCreaters({ children }: CardCreatersProps) {
  return (
    <main className={styles.CardCreatersContainer}>
      { children }
    </main>
  )
}
