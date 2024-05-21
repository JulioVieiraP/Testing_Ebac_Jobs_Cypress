/// <reference types='cypress' />

describe("Teste para a home", () => {
    beforeEach(() => {
      cy.visit("https://agenda-contatos-react.vercel.app/");
    })
    
    it("Deve adicionar contato a lista", () => {
      cy.get('input[type="text"]').type("Julio")
      cy.get('input[type="email"]').type("Julio@gmail.com")
      cy.get('input[type="tel"]').type("11912345678")
      cy.contains("Adicionar").click()
      cy.screenshot('Adicionando contato')
    })
    
    it("Deve alterar a informação do contato", () => {
      cy.get(":nth-child(3) > .sc-gueYoa > .edit").click()
      cy.get('input[type="text"]').clear().type("Marcelo Souza")
      cy.get('input[type="email"]').clear().type("mmarcelo@ebac.com.br")
      cy.get('input[type="tel"]').clear().type("11912345678")
      cy.get(".alterar").click()
      cy.screenshot('Alterando contato')
    })
    
    it("Deve remover um contato da lista", () => {
      cy.get(":nth-child(3) > .sc-gueYoa > .delete").click()
      cy.screenshot('deletando contato')
    })
})