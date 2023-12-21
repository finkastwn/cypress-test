describe('login', () => {
  it('login passes as standard_user', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include','saucedemo.com')
    
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include','/inventory.html')

    cy.get('#react-burger-menu-btn').click()
    cy.get('.header_label').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('include','saucedemo.com')
  });

  it('login failed', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include','saucedemo.com')
    
    cy.get('[data-test="username"]').type("standar_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
  });

  it('login success after type wrong username', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.url().should('include','saucedemo.com')
    
    cy.get('[data-test="username"]').type("standar_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service')
    
    // retype username
    cy.get('[data-test="username"]').clear().type("standard_user")
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include','/inventory.html')
  });

  it('login using command', () => {
    // using commands
    cy.login("standard_user","secret_sauce")
    cy.logout()
  });

  it('login using helper', () => {
    // using helper
    cy.helper.login("success")
    cy.logout()

    cy.helper.login("locked_user")
    cy.get('[data-test="username"]').clear()
    cy.get('[data-test="password"]').clear()

    cy.helper.login("problem_user")
    cy.logout()

    cy.helper.login("glitch_user")
    cy.logout()
  });
});