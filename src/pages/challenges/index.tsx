import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { CardChallenges } from '../../components/CardChallenges'
import { api } from '../../service/api'
import { IChallenge } from '../../shared/interfaces/challenge'

import styles from '../styles/ListChallenges.module.scss'

export default function ListChallenges() {
  const [challenges, setChallenges] = useState<IChallenge[]>([])

  useEffect(() => {
    api.get<IChallenge[]>('challenges').then(response => {
      setChallenges(response.data)
    })
  }, [])

  return (
    <>
      <Head>
        <meta name="description" content="Desafios de programação para desenvolvedores evoluirem suas habilidades."/>
        <title>BATcoder | Desafios</title>
      </Head>
      <main className={styles.ListChallengesContainer}>
        {
          challenges.map(challenge => (
        <CardChallenges marginBottom={32} key={challenge.id}>
          <img src={challenge.cover} alt=""/>
          <strong>{challenge.title}</strong>
          <p>{challenge.description}</p>
            <Link href={`/challenges/${challenge.slug}`}>
              <button>Detalhes</button>
            </Link>
        </CardChallenges>
          ))
        }
      </main>
    </>
  )
}
