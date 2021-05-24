import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { api } from '../../service/api'
import { IChallenge } from '../../shared/interfaces/challenge'

import styles from '../styles/DetailsChallenge.module.scss'

export default function DetailsChallenge(id: number) {
  const [challenge, setChallenge] = useState<IChallenge>()

  const router = useRouter()
  const slug = router.query.slug

  useEffect(() => {
    api.get<IChallenge>(`challenges?slug=${slug}`).then(response => {
      setChallenge(response.data[0])
    })
  }, [slug])
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
          <p>{challenge?.description}</p>
          <button>Codar</button>
        </div>
      </main>
    </>
  )
}
