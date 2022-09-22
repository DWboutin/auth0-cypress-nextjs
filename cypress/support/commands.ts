// @ts-check
///<reference path="../index.d.ts" />

Cypress.Commands.add("login", () => {
  cy.visit("/");

  // Find a link with an href attribute containing "about" and click it
  cy.get('a[href*="login"]').click();

  cy.origin(Cypress.env("auth0_uri"), () => {
    cy.get("input#username").type(Cypress.env("auth0_username"));
    cy.get("input#password").type(Cypress.env("auth0_password"));

    cy.get('button[type="submit"][name="action"]').click();
  });
});
