// First group tests

// Ignoruje chyby, ktoré nie sú relevantné pre test.
Cypress.on('uncaught:exception', (err, runnable) => {
    
    if (err.message.includes('item_id_group')) {
        return false;
    }
    return true;

});

// -------- Mobilne zobrazenie ---------

context('Mobile view', () => {
    beforeEach(() => {
        cy.viewport(1020, 1460);
    });

    it('Successful login', () => {
        cy.visit('/');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('[data-src="/images/icons/account.svg"]').should('be.visible').click();

        cy.get('input[name="email"]').click().type('uradnicek@brilo.cz');

        cy.get('input[name="password"]').click().type('JanojeHonza11');

        cy.get('button[type="submit"]').click();
    });

    it('Unsuccessful login - empty credentials)', () => {
        cy.visit('/');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('[data-src="/images/icons/account.svg"]').should('be.visible').click();

        cy.get('button[type="submit"]').click();
    });

    it('Unsuccessful login - invalid email)', () => {
        cy.visit('/');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('[data-src="/images/icons/account.svg"]').should('be.visible').click();

        cy.get('input[name="email"]').click().type('tvojaMamka@withMe.cz');

        cy.get('input[name="password"]').click().type('JanojeHonza11');

        cy.get('button[type="submit"]').click();

        cy.contains('Prihlásenie sa nepodarilo.').should('be.visible');
    });

    it('Unsuccessful login with incorrect password', () => {
        cy.visit('/');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('[data-src="/images/icons/account.svg"]').should('be.visible').click();

        cy.get('input[name="email"]').click().type('uradnicek@brilo.cz');

        cy.get('input[name="password"]').click().type('JanojeHomosexual');

        cy.get('button[type="submit"]').click();

        cy.contains('Prihlásenie sa nepodarilo.').should('be.visible');
    });

    // it('Forgot your password?', () => {
    //     cy.visit('/');

    //     cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

    //     cy.get('[data-src="/images/icons/account.svg"]').should('be.visible').click();

    //     cy.get('[data-testid="sign-in-forgotten-password-link"]').click();

    //     cy.get('input[name="email"]').click().type('uradnicek@brilo.cz');

    //     // Čo dalej?
    // });

    it('Successful login from another location', () => {
        cy.visit('/darcekove-poukazy');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('img[alt="Darčeková karta GAP - 40 EUR"]').click();

        cy.get('a[href="/darcekova-karta-gap-40-eur?selectedVariant=73079"]')
        .scrollIntoView() 
        .click();
        
        cy.wait(6000);

        cy.get('.mlctr-close-button.white.inside').click();

        
        cy.get('[data-testid="add-to-cart-submit-button"]')
        .contains("Vložiť do košíka").click({ force: true });


        cy.get('span.CustomButton_customButton__kKyRh.CustomButton_primary__IRLMT.CustomButton_base__OpeDA.w-full')
        .contains('Prejsť do košíka').should('be.visible').click();
        
        cy.get('[data-testid="checkout-login-promo-sign-in-button"]').should('be.visible').click();

        cy.get('input[type="email"]').should('be.visible').type('uradnicek@brilo.cz');

        cy.get('input[type="password"]').type('JanojeHonza11');

        cy.get('button[type="submit"]').contains('Prihlásiť sa').click();

        cy.contains('Váš košík').should('be.visible')
    });
});


// ----------- Webové zobrazenie ------------- 

context('Web view', () => {

    beforeEach(() => {
        cy.viewport(1920, 1066);

    });

    it('Successful login', () => {

        cy.visit('/');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('[data-testid="top-bar-sign-in-link"]').should('be.visible').click();

        cy.get('input[name="email"]').click().type('uradnicek@brilo.cz');

        cy.get('input[name="password"]').click().type('JanojeHonza11');

        cy.get('button[type="submit"]').click();

    });

    it('Unsuccessful login empty credentials)', () => {
        cy.visit('/uzivatel/prihlasenie');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('button[type="submit"]').click();
    });

    it('Unsuccessful login - invalid email)', () => {
        cy.visit('/uzivatel/prihlasenie');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('input[name="email"]').click().type('tvojaMamka@withMe.cz');

        cy.get('input[name="password"]').click().type('JanojeHonza11');

        cy.get('button[type="submit"]').click();

        cy.contains('Prihlásenie sa nepodarilo.').should('be.visible');
    });

    it('Unsuccessful login with incorrect password', () => {
        cy.visit('/uzivatel/prihlasenie');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('input[name="email"]').click().type('uradnicek@brilo.cz');

        cy.get('input[name="password"]').click().type('JanojeHomosexual');

        cy.get('button[type="submit"]').click();

        cy.contains('Prihlásenie sa nepodarilo.').should('be.visible');
    });

    // it('Forgot your password?', () => {
    //     cy.visit('/');

    //     cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

    //     cy.get('[data-testid="sign-in-forgotten-password-link"]').click();

    //     cy.get('input[name="email"]').click().type('uradnicek@brilo.cz');

        // Čo dalej?
    // });

    it('Successful login from another location', () => {
        
        cy.visit('/darcekove-poukazy');

        cy.get('.CybotCookiebotDialogBodyButton').contains('Povoliť všetko').should('be.visible').click();

        cy.get('img[alt="Darčeková karta GAP - 40 EUR"]').click();


        cy.get('a[href="/darcekova-karta-gap-40-eur?selectedVariant=73079"]').click();

        cy.wait(6000);

        cy.get('.mlctr-close-button.white.inside').click();

        cy.get('[data-testid="add-to-cart-submit-button"]')
        .contains("Vložiť do košíka").click({ force: true });

        cy.get('span.CustomButton_customButton__kKyRh.CustomButton_primary__IRLMT.CustomButton_base__OpeDA.w-full')
        .contains('Prejsť do košíka').should('be.visible').click();
        
        cy.get('[data-testid="checkout-login-promo-sign-in-button"]').should('be.visible').click();

        cy.get('input[type="email"]').should('be.visible').type('uradnicek@brilo.cz');

        cy.get('input[type="password"]').type('JanojeHonza11');

        cy.get('button[type="submit"]').contains('Prihlásiť sa').click();

        cy.contains('Váš košík').should('be.visible')

    });

});