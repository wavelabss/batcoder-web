import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface CardChallengesProps {
  children: ReactNode
}

export function CardChallenges({ children }: CardChallengesProps) {
  return (
    <main className={styles.CardChallengesContainer}>
      { children }
    </main>
  )
}
