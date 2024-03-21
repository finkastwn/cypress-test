export const assertUrl = (page: string) => {
    let result: Cypress.Chainable<string>
    if (page == "home") {
        return result = cy.url().should('eq', 'https://primaku.com/')
    } else if (page == "about") {
        return result = cy.url().should('eq', 'https://primaku.com/about')
    }
}