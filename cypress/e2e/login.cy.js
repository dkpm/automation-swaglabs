describe('swag labs - login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('realizar login com sucesso', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.contains('.title', 'Products').should('be.visible')
  })

  it('realizar login sem preencher o password', () => {
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="login-button"]').click()

    cy.contains('[data-test="error"]', 'Password is required').should('be.visible')
  })

  it('realizar login sem preencher o username', () => {
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.contains('[data-test="error"]', 'Username is required').should('be.visible')
    
  })

  it('realizar login sem preencher o username e password', () => {

    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.contains('[data-test="error"]', 'Username is required').should('be.visible')
    
  })
})