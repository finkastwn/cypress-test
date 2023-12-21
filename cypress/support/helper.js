cy.helper = {
    login: (type) => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include','saucedemo.com')
        
        if(type == "success"){
            cy.get('[data-test="username"]').type("standard_user")
            cy.get('[data-test="password"]').type("secret_sauce")
            cy.get('[data-test="login-button"]').click()
            cy.url().should('include','/inventory.html')
        } else if (type == "locked_user"){
            cy.get('[data-test="username"]').type("locked_out_user")
            cy.get('[data-test="password"]').type("secret_sauce")
            cy.get('[data-test="login-button"]').click()
            cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.')
        } else if (type == "problem_user"){
            cy.get('[data-test="username"]').type("problem_user")
            cy.get('[data-test="password"]').type("secret_sauce")
            cy.get('[data-test="login-button"]').click()
            cy.url().should('include','/inventory.html')
        } else if (type == "glitch_user"){
            cy.get('[data-test="username"]').type("performance_glitch_user")
            cy.get('[data-test="password"]').type("secret_sauce")
            cy.get('[data-test="login-button"]').click()
        }
    },
    assertUrl: (page) => {
        if(page == "home"){
            cy.url().should('eq','https://primaku.com/')
        }else if(page == "about"){
            cy.url().should('eq','https://primaku.com/about')
        }
    }
}