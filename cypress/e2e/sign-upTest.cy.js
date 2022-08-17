
import userFactory from "./factory/userFactory"

describe("Sign-up test", () =>{
    it("Should create a user", async () => {
        cy.seedDB()
        
        cy.visit(userFactory.URL_FRONT)
        cy.visit(`${userFactory.URL_FRONT}/sign-up`)

        const user = userFactory.createUser()
        cy.get('input[placeholder=Name]').type(user.name)
        cy.get('input[placeholder=E-mail]').type(user.email)
        cy.get('input[placeholder=Password]').type(user.password)
        cy.get('input[placeholder=Confirmpassword]').type(user.passwordConfirmation)

        cy.intercept('POST', `${userFactory.URL_BACK}/sign-up`).as('createUser')
        cy.get('button').click()
        cy.wait('@createUser')

        cy.url().should('equal', `${userFactory.URL_FRONT}/`)
    })    
})


beforeEach(() => {
    cy.resetDB()
})