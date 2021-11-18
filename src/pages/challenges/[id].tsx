import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { api } from '../../service/api'
import { IChallenge } from '../../shared/interfaces/challenge'

import styles from '../styles/DetailsChallenge.module.scss'

export default function DetailsChallenge() {
  const [challenge, setChallenge] = useState<IChallenge>()

  const router = useRouter()
  const id = router.query.id

  useEffect(() => {
    api.get<IChallenge>(`challenges/${id}`).then(response => {
      setChallenge(response.data)
    })
  }, [id])
  return (
    <>
      <Head>
        <meta name="description" content="Desafios de programação para desenvolvedores evoluirem suas habilidades."/>
        <title>BATcoder | {challenge?.title} </title>
      </Head>
      <main className={styles.DetailsChallengeContainer}>
        <div className={styles.DetailsChallengeCard}>
          <strong>{challenge?.title}</strong>
          <img src={challenge?.cover} alt="" />
          <p>{challenge?.longDescription}</p>
          <a href={challenge?.repository} target="_blank" rel="noreferrer">Codar</a>
        </div>
      </main>
    </>
  )
}
