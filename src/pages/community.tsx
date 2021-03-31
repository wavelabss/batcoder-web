import Head from "next/head";
import { CallTheAction } from "../components/CallTheAction";

export default function Community() {
  return (
    <>
      <Head>
        <meta name="description" content="Comunidade de programadores que amam tecnologia" />
        <title>BATcoder | Comunidade</title>
      </Head>
      <CallTheAction
        title="Participe da nossa comunidade no discord. É rápido e indolor."
        subtitle="Todos os integrantes são muito simpáticos. Manda um salve no chat-geral."
        textButton="Acessar!"
        imgPath="./images/community.svg"
        />
    </>
  )
}
