import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to the starwars homepage', () => {
  cy.visit('/');
});

When('I click on the sign in button', () => {
  cy.contains('Sign In').click();
});

When('I type e-mail adress', () => {
  cy.frameLoaded('#oneid-iframe');
  cy.iframe('#oneid-iframe').find('#InputIdentityFlowValue').should('be.visible').type('jasykbartosz@gmail.com');
});

When('I click on continue button', () => {
  cy.iframe('#oneid-iframe').find('#BtnSubmit').should('be.visible').click();
});

When('I type password', () => {
  cy.iframe('#oneid-iframe').find('#InputPassword').should('be.visible').type('Rujupyse123!');
});

When('I click on the Sign in button', () => {
  cy.iframe('#oneid-iframe').find('#BtnSubmit').should('be.visible').click();
});

Then('Should be present my name next to login icon', () => {
  cy.get('.logged-in p').should('contain', 'Bartosz');
});
