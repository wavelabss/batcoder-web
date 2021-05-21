import { useEffect, useState } from 'react'
import { api } from '../../service/api'
import { IChallenge } from '../../shared/interfaces/challenge'

import styles from '../styles/DetailsChallenge.module.scss'

export default function DetailsChallenge(id: number) {
  const [challenge, setChallenge] = useState<IChallenge>()

  useEffect(() => {
    api.get<IChallenge>('challenges/2').then(response => {
      console.log(response)
      setChallenge(response.data)
    })
  }, [])
  return (
    <main className={styles.DetailsChallengeContainer}>
      <div className={styles.DetailsChallengeCard}>
        <strong>{challenge?.title}</strong>
        <img src={challenge?.cover} alt="" />
        <p>{challenge?.description}</p>
        <button>Codar</button>
      </div>
    </main>
  )
}
