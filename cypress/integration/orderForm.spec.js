describe('Site Test', () => {
    it ('Can navigate to the site', () => {
        cy.visit('http://localhost:3000/') 
    })

    it ('Can add text to box', () => {
        cy.get('button')
        .click()
        cy.get('input[name="name"]')
        .type('hello')
    })

    it('Can select multiple toppings', () => {
        cy.get('input[name="pepperoni"')
        .click()
        cy.get('input[name="sausage"]')
        .click()
    })

    it('Can submit order form', () => {
        cy.get('form button')
        .click()
    })
})