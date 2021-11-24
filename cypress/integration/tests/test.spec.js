/* eslint-disable no-undef */
describe('BATcoder', function () {
  it('Entrar na plataforma', function () {
    cy.visit('https://batcoder.vercel.app/') // acessar url

    cy.scrollTo('bottom', { duration: 3000 }) // scroll para baixo com a duração de 3 segundos
    cy.wait(1000)

    cy.scrollTo('top', { duration: 3000 }) // scroll para cima (voltar)
    cy.wait(2000)
  })

  it('Entrar na tela de Desafios', function () {
    cy.get('a').contains('Desafios').click({ force: true })
    cy.wait(2000)

    cy.scrollTo('bottom', { duration: 2000 }) // scroll para baixo com a duração de 3 segundos
    cy.wait(1000)

    cy.scrollTo('top', { duration: 2000 }) // scroll para cima (voltar)
    cy.wait(2000)
  })
  it('Abiri detalhes de um desafio', function () {
    cy.get('button').contains('Detalhes').first().click({ force: true })
    cy.wait(1000)

    cy.scrollTo('bottom', { duration: 2000 }) // scroll para baixo com a duração de 3 segundos
    cy.wait(1000)

    cy.get('a').contains('Codar').click({ force: true })
    cy.wait(1000)

    cy.scrollTo('top', { duration: 2000 }) // scroll para cima (voltar)
    cy.wait(2000)
  })

  it('Entrar na tela de Comunidade', function () {
    cy.get('a').contains('Comunidade').click({ force: true })
    cy.wait(2000)
  })
  it('Acessar comunidade', function () {
    cy.get('a').contains('Acessar!').click({ force: true })
    cy.wait(2000)
  })
})
