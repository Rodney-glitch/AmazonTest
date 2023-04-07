/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
const testData = require("../fixtures/example.json");
const homePage = new HomePage();

const email = testData.email;
const password = testData.password;

describe('Amazon Login', () => {
    it('Logs in to Amazon', () => {
        cy.visit(Cypress.env("url"))
        homePage.signInButton.click()
        homePage.emailInput.type(email)
        homePage.continueButton.click()
        homePage.passwordInput.type(password)
        homePage.signInSubmitButton.click()
        cy.url().should('include', '/your-account')
    })
})