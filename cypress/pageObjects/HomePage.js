class HomePage {
    get signInButton() {
        return cy.get('#nav-signin-tooltip > a')
    }

    get emailInput() {
        return cy.get('#ap_email')
    }

    get continueButton() {
        return cy.get('#continue')
    }

    get passwordInput() {
        return cy.get('#ap_password')
    }

    get signInSubmitButton() {
        return cy.get('#signInSubmit')
    }
}
export default HomePage;