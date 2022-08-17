
import userFactory from "./factory/userFactory"

describe("Sign-up and sign-in test", () =>{  

    it("Should log in adn visit the page home", async() => {
        
        cy.visit(`${userFactory.URL_FRONT}/`)

        const user = userFactory.createUser()
        cy.get('input[placeholder=e-mail]').type(user.email)
        cy.get('input[placeholder=password]').type(user.password)

        cy.intercept('POST', `${userFactory.URL_BACK}/sign-in`).as('loginUser')
        cy.intercept('GET', `${userFactory.URL_BACK}/raffle`).as('getRaffles')
        cy.get('button').click()
        cy.wait('@loginUser')
        cy.wait('@getRaffles')

        cy.get('.swal2-confirm.swal2-styled').click()

        cy.get('button:first').click()

        cy.get('input[placeholder=amount]').type("10")

        cy.intercept('GET', `${userFactory.URL_BACK}/raffle/1?amount=10`).as('getNumbers')
        cy.get('button[type=submit]').click()
        cy.wait('@getNumbers')

        cy.intercept('POST', `${userFactory.URL_BACK}/buy/raffle/1`).as('buyNumbers')
        cy.get('button[type=buy]').click()
        cy.wait('@buyNumbers')

        cy.get('.swal2-confirm.swal2-styled').click()
        
        cy.get('.link2').click()
    })    
})
