// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('login', (username,password) => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include','saucedemo.com')
    
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('.header_label').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include','saucedemo.com')
})

Cypress.Commands.add('getBooking', (bookingId) => {
    cy.request({
        method: 'GET',
        url: `https://restful-booker.herokuapp.com/booking/` + bookingId,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive'
        }
    })
});
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })