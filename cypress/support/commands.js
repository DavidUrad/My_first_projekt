// ---------------------- function fielField -------------------------
Cypress.Commands.add('fillField', (selector, value) => {
    cy.get(selector)
      .should('be.visible')
      .as('inputField');
  
    cy.get('@inputField').invoke('val', ''); 
    cy.get('@inputField').type(value, { force: true }); 
  });

// Cypress.Commands.add('fillField', (selector, value) => {
//     cy.get(selector).clear().type(value);
//   });


// ----------------------- popUP CLOSE --------------------------------
Cypress.Commands.add('popUpVoucherClosed', () => {
  cy.document().then((document) => {
      new MutationObserver(function () {
          const popUpSelector = 'div.mlctr-popup';
          if (document.querySelector(popUpSelector)) {
              cy.get(popUpSelector + ' > div.mlctr-close-button').click({
                  multiple: true,
                  force: true,
              });
          }
      }).observe(document.body, { childList: true, subtree: true });
  });
});
    //   cy.popUpVoucherClosed();