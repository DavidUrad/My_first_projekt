// Second group tests

import * as constants from '../support/constants.js';

const COOKIES_DIALOG = 'consent-dialog'
const COOKIES_ALLOW_ALL = '.c-b.c-b--p'

// Ignoruje chyby, ktoré nie sú relevantné pre test.
Cypress.on('uncaught:exception', (err, runnable) => {

    if (err.message.includes('item_id_group')) {
        return false;
    }
    return true;

});

// -------- Webové zobrazenie ---------



describe('Web view', () => {

    beforeEach(() => {
        cy.viewport(1920, 1066);
        cy.visit('/');
        cy.get(COOKIES_DIALOG).shadow().find(COOKIES_ALLOW_ALL).last().click();

        cy.popUpVoucherClosed();

    });

    it('Contact Form Unregistered', () => {

        cy.intercept('GET', '**/api/product/details*').as('productDetail');

        cy.visit('/zeny');

        cy.get('[data-testid="product-list-product-card-vertical-article"]')
            .first()
            .click();

        cy.wait('@productDetail').its('response.statusCode').should('eq', 200);

        cy.intercept('POST', '**/web-api/*/*/cart/product-size/*').as('addToCart');

        cy.get('div[data-testid="product-detail-sizes-wrapper-select-sizes-div"]')
            .find('a')
            .first()
            .click();

        cy.intercept('GET', '**/event=addtocart**').as('addToCart');

        cy.get(constants.PRODUCT_PAGE.ADD_TO_CART_BUTTON)
            .filter(':visible')
            .click();

        cy.wait('@addToCart').its('response.statusCode').should('eq', 200)

        cy.visit('/kosik/kontaktne-udaje');

        cy.fillField(constants.FORM_PAGE.FIRST_NAME_INPUT, FORM_DATA.FIRST_NAME);
        cy.fillField(constants.FORM_PAGE.LAST_NAME_INPUT, FORM_DATA.LAST_NAME);
        cy.fillField(constants.FORM_PAGE.EMAIL_INPUT, FORM_DATA.EMAIL);
        cy.fillField(constants.FORM_PAGE.PHONE_INPUT, FORM_DATA.PHONE);
        cy.fillField(constants.FORM_PAGE.STREET_ADDRESS_INPUT, FORM_DATA.STREET);
        cy.fillField(constants.FORM_PAGE.CITY_INPUT, FORM_DATA.CITY);
        cy.fillField(constants.FORM_PAGE.POST_CODE_INPUT, FORM_DATA.POST_CODE);
        cy.get(constants.FORM_PAGE.AGREE_WITH_TERMS_CHECKBOX).check({ force: true });
        cy.get(constants.FORM_PAGE.CHECKOUT_SHIPPAY_GO_TO_SHIPPING_BUTTON).click();

        cy.get(constants.SHIPPING_METHOD.SHIPPING_OPTION_GLS).click();
        cy.get(constants.SHIPPING_METHOD.CONTINUE_TO_PAYMENT_BUTTON).click();

        cy.get(constants.PAYMENT_METHOD.PAYMENT_OPTION_APPLE_PAY).click();
        // cy.get(constants.PAYMENT_METHOD.CONFIRM_ORDER_BUTTON).click();
    });

    it('Contact Form Registered', () => {

        cy.visit('/uzivatel/prihlasenie');

        cy.fillField(constants.LOGIN_PAGE.INPUT_EMAIL, constants.LOGIN_CREDENTIALS.EMAIL);
        cy.fillField(constants.LOGIN_PAGE.INPUT_PASSWORD, constants.LOGIN_CREDENTIALS.PASSWORD);

        cy.intercept('POST', '**/web-api/**/login').as('userLogin');

        cy.get(constants.LOGIN_PAGE.LOGIN_BUTTON).click();

        cy.wait('@userLogin').its('response.statusCode').should('eq', 200);

        cy.visit('/zeny');

        cy.intercept('GET', '**/api/product/details*').as('productDetail');

        cy.get('[data-testid="product-list-product-card-vertical-article"]')
            .first()
            .click();

        cy.wait('@productDetail').its('response.statusCode').should('eq', 200);

        cy.get('div[data-testid="product-detail-sizes-wrapper-select-sizes-div"]')
            .find('a')
            .first()
            .click();

        cy.intercept('POST', '**/web-api/*/*/cart/product-size/*').as('addToCart');

        cy.get(constants.PRODUCT_PAGE.ADD_TO_CART_BUTTON).filter(':visible').click();

        cy.wait('@addToCart').its('response.statusCode').should('eq', 200);

        cy.visit('/kosik/obsah');

        cy.get(constants.CHECKOUT_PAGE.ORDER_BUTTON).click();

        cy.get('textarea[name="note"]').type('Jupí funguje to!!');

        cy.get(constants.FORM_PAGE.AGREE_WITH_TERMS_CHECKBOX).check({ force: true });
        cy.get(constants.FORM_PAGE.CHECKOUT_SHIPPAY_GO_TO_SHIPPING_BUTTON).click();

        cy.get(constants.SHIPPING_METHOD.SHIPPING_OPTION_GLS).click();
        cy.get(constants.SHIPPING_METHOD.CONTINUE_TO_PAYMENT_BUTTON).click();

        cy.get(constants.PAYMENT_METHOD.PAYMENT_OPTION_APPLE_PAY).click();
        // cy.get(constants.PAYMENT_METHOD.CONFIRM_ORDER_BUTTON).click();

    });


    it.only('Contact Form Unregistered - Invalid Data', () => {

        cy.intercept('GET', '**/api/product/details*').as('productDetail');

        cy.visit('/zeny');

        cy.get('[data-testid="product-list-product-card-vertical-article"]')
            .first()
            .click();

        cy.wait('@productDetail').its('response.statusCode').should('eq', 200);

        cy.intercept('POST', '**/web-api/*/*/cart/product-size/*').as('addToCart');

        cy.get('div[data-testid="product-detail-sizes-wrapper-select-sizes-div"]')
            .find('a')
            .first()
            .click();

        cy.intercept('GET', '**/event=addtocart**').as('addToCart');

        cy.get(constants.PRODUCT_PAGE.ADD_TO_CART_BUTTON)
            .filter(':visible')
            .click();

        cy.wait('@addToCart').its('response.statusCode').should('eq', 200)

        cy.visit('/kosik/kontaktne-udaje');

        cy.get(constants.FORM_PAGE.FIRST_NAME_INPUT)
            .type('Gandalf');

        cy.get(constants.FORM_PAGE.LAST_NAME_INPUT)
            .type('Šedý');

        cy.get(constants.FORM_PAGE.EMAIL_INPUT)
            .type('Gandalf.Šedý@mordor.lotr');

        cy.fillField(constants.FORM_PAGE.PHONE_INPUT, FORM_DATA.PHONE);
        cy.fillField(constants.FORM_PAGE.STREET_ADDRESS_INPUT, FORM_DATA.STREET);
        cy.fillField(constants.FORM_PAGE.CITY_INPUT, FORM_DATA.CITY);

        cy.get(constants.FORM_PAGE.POST_CODE_INPUT)
            .type('100');

        cy.get(constants.FORM_PAGE.AGREE_WITH_TERMS_CHECKBOX).check({ force: true });
        cy.get(constants.FORM_PAGE.CHECKOUT_SHIPPAY_GO_TO_SHIPPING_BUTTON).click();

        cy.get('span.text-danger-500').should('be.visible')
        .and('contain.text', 'Nesprávny formát PSČ');

    });

});
