import { ReactNode } from 'react'

import styles from './styles.module.scss'

interface CardChallengesProps {
  children: ReactNode,
  marginBottom?: number
}

export function CardChallenges({ children, marginBottom }: CardChallengesProps) {
  return (
    <main className={styles.CardChallengesContainer} style={{ marginBottom: marginBottom }}>
      { children }
    </main>
  )
}
