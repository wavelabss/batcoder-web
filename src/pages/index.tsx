import Head from 'next/head'
import { CallTheAction } from '../components/CallTheAction'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Desafios de programação para desenvolvedores evoluirem suas habilidades."/>
        <title>BATcoder | Início</title>
      </Head>
      <CallTheAction 
        title="Desafios de programação para desenvolvedores evoluirem suas habilidades."
        subtitle="Confira os desafios disponíveis na nossa plataforma."
        textButton="Bora lá!"
        imgPath="./images/programmer.svg"
      />
    </>
  )
}
