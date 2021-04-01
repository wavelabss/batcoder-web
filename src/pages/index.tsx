import Head from 'next/head'
import { CallTheAction } from '../components/CallTheAction'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Desafios de programação para desenvolvedores evoluirem suas habilidades."/>
        <title>BATcoder | Início</title>
      </Head>
      <CallTheAction>
        <h1>Desafios de programação para desenvolvedores evoluirem suas habilidades.</h1>
        <h2>Confira os desafios disponíveis na nossa plataforma.</h2>
        <button>Bora lá!</button>
        <img src="./images/programmer.svg" alt="Programador"/>
      </CallTheAction>
    </>
  )
}
