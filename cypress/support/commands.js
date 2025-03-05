// ---------------------- function fielField -------------------------
Cypress.Commands.add('fillField', (selector, value) => {
    cy.get(selector).clear().type(value);
  });

    // cy.fillField(FIRST_NAME, formData.firstName);

// ----------------------- popUP CLOSE --------------------------------
Cypress.Commands.add('popUpVoucherClosed', () => {
    cy.get('div.mlctr-popup', { timeout: 10000 }) // Čaká max 10 sekúnd, kým sa pop-up objaví
      .should('be.visible')
      .then(() => {
        cy.get('div.mlctr-popup > div.mlctr-close-button').click({ force: true });
      });
  });

    //   cy.popUpVoucherClosed();