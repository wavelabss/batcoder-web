import Head from 'next/head'
import Link from 'next/link'
import { CallTheAction } from '../components/CallTheAction'
import { CardCreaters } from '../components/CardCreaters'

import styles from './styles.module.scss'

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
        <Link href="/challenges">
          <button>Bora lá!</button>
        </Link>
        <img src="./images/programmer.svg" alt="Programador"/>
      </CallTheAction>
      <img src="./images/div-section.svg" alt="Wave division"/>
      <section className={styles.CreatersContainer}>
        <h2>Criadores</h2>
        <div>
          <CardCreaters>
            <img src="./images/creaters/ana.png" alt="Ana Laura"/>
            <strong>Ana Laura</strong>
            <p>
              Estudante de ciencia da computação, apaixonada por fazer conexões e inspirar pessoas.<br />
              Manja dos designs e adora organizar eventos de tecnolgia.<br />
              Acredita que o segredo para mudar o mundo é ocupar lugares importatantes.
            </p>
            <div>
              <a href="https://github.com/laureca" target="_blank" rel="noreferrer"><img src="./images/icons/github.svg" alt="Logo GitHub"/></a>
              <a href="https://www.instagram.com/laureca/" target="_blank" rel="noreferrer"><img src="./images/icons/instagram.svg" alt="Logo Instagram"/></a>
              <a href="https://www.linkedin.com/in/ana-laura-pereira-mariano-060b0b189/" target="_blank" rel="noreferrer"><img src="./images/icons/linkedin.svg" alt="Logo Linkedin"/></a>
            </div>
          </CardCreaters>
          <div className={styles.CardCreatersWrapper}>
            <CardCreaters>
              <img src="./images/creaters/bruno.png" alt="Bruno Laviso"/>
              <strong>Bruno Laviso</strong>
              <p>
                Desenvolvedor front-end.<br />
                Entusiasta JavaScript, Typescript, React e React Native.<br />
                Adora trocar a cor de um botão.<br />
                Toca um violão quando tem tempo.<br />
                Fã incontrolável de Los Hermanos.
              </p>
              <div>
                <a href="https://github.com/brunolaviso" target="_blank" rel="noreferrer"><img src="./images/icons/github.svg" alt="Logo GitHub"/></a>
                <a href="https://www.instagram.com/brunolaviso/" target="_blank" rel="noreferrer"><img src="./images/icons/instagram.svg" alt="Logo Instagram"/></a>
                <a href="https://www.linkedin.com/in/brunolaviso/" target="_blank" rel="noreferrer"><img src="./images/icons/linkedin.svg" alt="Logo Linkedin"/></a>
              </div>
            </CardCreaters>
          </div>
          <CardCreaters>
            <img src="./images/creaters/thiago.png" alt="Thiago Moura"/>
            <strong>Thiago Moura</strong>
            <p>
              Lider do time de consultoria SAP, ou seja, logo ele será patrão de todo mundo.<br />
              Tem afinidade com a parte de gestão de projetos e de relação com o cliente.
              É um fruto do suporte, mas que com força de vontade conseguiu alcançar um objetivo atrás do outro.
            </p>
            <div>
              <a href="https://github.com/ThiagoMoura183" target="_blank" rel="noreferrer"><img src="./images/icons/github.svg" alt="Logo GitHub"/></a>
              <a href="https://www.instagram.com/_thiagomoura7/" target="_blank" rel="noreferrer"><img src="./images/icons/instagram.svg" alt="Logo Instagram"/></a>
              <a href="https://www.linkedin.com/in/thiago-moura-28b572169/" target="_blank" rel="noreferrer"><img src="./images/icons/linkedin.svg" alt="Logo Linkedin"/></a>
            </div>
          </CardCreaters>
        </div>
      </section>
    </>
  )
}
