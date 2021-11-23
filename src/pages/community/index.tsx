import Head from 'next/head'
import { CallTheAction } from '../../components/CallTheAction'

import styles from './styles.module.scss'

export default function Community() {
  return (
    <>
      <Head>
        <meta name="description" content="Comunidade de programadores que amam tecnologia" />
        <title>BATcoder | Comunidade</title>
      </Head>
      <main className={styles.CommunityContent}>
        <CallTheAction>
          <h1>Participe da nossa comunidade no discord. <br />É rápido e indolor.</h1>
          <h2>Todos os integrantes são muito simpáticos. Manda um salve no chat-geral.</h2>
          <a href="https://discord.gg/AHbF8BK" target="_blank" rel="noreferrer">Acessar!</a>
          <img src="./images/community.svg" alt="Pessoas conversando digitalmente"/>
        </CallTheAction>
      </main>
    </>
  )
}
