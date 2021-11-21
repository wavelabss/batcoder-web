import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { CardChallenges } from '../../components/CardChallenges'
import { api } from '../../service/api'
import { IChallenge } from '../../shared/interfaces/challenge'

import styles from './styles.module.scss'

interface IListChallengesProps {
  challenges: IChallenge[]
}

export default function ListChallenges({ challenges }: IListChallengesProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Desafios de programação para desenvolvedores evoluirem suas habilidades."/>
        <title>BATcoder | Desafios</title>
      </Head>
      <main className={styles.ListChallengesContainer}>
        {
          challenges?.map(challenge => (
        <CardChallenges marginBottom={32} key={challenge?.id}>
          <img src={challenge?.cover} alt={challenge?.title}/>
          <strong>{challenge?.title}</strong>
          <p>{challenge?.shortDescription}</p>
            <Link href={`/challenges/${challenge?.id}`}>
              <button>Detalhes</button>
            </Link>
        </CardChallenges>
          ))
        }
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<IListChallengesProps> = async () => {
  const response = await api.get<IChallenge[]>('challenges')

  return {
    props: {
      challenges: response.data
    }
  }
}
