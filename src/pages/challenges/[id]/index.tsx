import Head from 'next/head'
import { api } from '../../../service/api'
import { IChallenge } from '../../../shared/interfaces/challenge'

import styles from './styles.module.scss'
import { GetStaticPaths, GetStaticProps } from 'next'

interface IDetailsChallengeProps {
  challenge: IChallenge
}

export default function DetailsChallenge({ challenge }: IDetailsChallengeProps) {
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

export const getStaticProps: GetStaticProps<IDetailsChallengeProps> = async ({ params }) => {
  const response = await api.get<IChallenge>(`challenges/${params.id}`)

  return {
    props: {
      challenge: response.data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}
