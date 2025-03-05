// Second group tests

import * as constants from '../support/constants.js';
import { formData, FORM_PAGE } from '../support/constants.js';

const { should } = require("chai");

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

        cy.visit('/')
        cy.get('consent-dialog')
            .shadow()
            .find('button')
            .contains('Povoliť všetko')
            .click({ force: true });

    });


    it('Contact Form Unregistered', () => {

        cy.visit('/zeny')

        cy.get('[data-testid="product-list-product-card-vertical-article"]')
            .first()
            .click();

        cy.get('div[data-testid="product-detail-sizes-wrapper-select-sizes-div"]')
            .find('a')
            .first()
            .click();

        cy.wait(6000)
        cy.popUpVoucherClosed();

        cy.get(constants.PRODUCT_PAGE.ADD_TO_CART_BUTTON).click();

        cy.visit('/kosik/kontaktne-udaje')

        cy.get(constants.FORM_PAGE.FIRST_NAME_INPUT);
        cy.fillField(FORM_PAGE.FIRST_NAME_INPUT, formData.firstName);

        cy.get(constants.FORM_PAGE.LAST_NAME_INPUT);
        cy.fillField(constants.FORM_PAGE.LAST_NAME_INPUT, formData.lastName);

        cy.get(constants.FORM_PAGE.EMAIL_INPUT);
        cy.fillField(constants.FORM_PAGE.EMAIL_INPUT, formData.email);

        cy.get(constants.FORM_PAGE.PHONE_INPUT);
        cy.fillField(constants.FORM_PAGE.PHONE_INPUT, formData.phone);

        cy.get(constants.FORM_PAGE.STREET_ADDRESS_INPUT);
        cy.fillField(constants.FORM_PAGE.STREET_ADDRESS_INPUT, formData.street);

        cy.get(constants.FORM_PAGE.CITY_INPUT);
        cy.fillField(constants.FORM_PAGE.CITY_INPUT, formData.city);

        cy.get(constants.FORM_PAGE.POST_CODE_INPUT);
        cy.fillField(constants.FORM_PAGE.POST_CODE_INPUT, formData.postCode);

        cy.get(constants.AGREE_WITH_TERMS_CHECKBOX).check();

        cy.get(constants.CHECKOUT_SHIPPAY_GO_TO_SHIPPING_BUTTON).click();

        cy.get(constants.SHIPPING_OPTION_GLS).click();
        cy.get(constants.SHIPPING_METOD.CONTINUE_TO_PAYMENT_BUTTON).click();

        cy.get(constants.PAYMENT_METHOD.PAYMENT_OPTION_APPLE_PAY).click();
        //cy.get(constants.CONFIRM_ORDER_BUTTON).click();


    });

    it('Contact Form Registered', () => {

        cy.get(constants.HOME_PAGE.LOGIN_ON_HEADER)
            .click();

        cy.get(constants.LOGIN_PAGE.IMPUT_EMAIL)
            .click()
            .type(constants.LOGIN_CREDENTIALS.EMAIL);

        cy.get(constants.LOGIN_PAGE.IMPUT_PASSWORD)
            .click()
            .type(constants.LOGIN_CREDENTIALS.PASSWORD);

        cy.get(constants.LOGIN_PAGE.LOGIN_BUTTON)
            .click();

        cy.visit('/zeny')

        cy.get('[data-testid="product-list-product-card-vertical-article"]')
            .first()
            .click();

        cy.get('div[data-testid="product-detail-sizes-wrapper-select-sizes-div"]')
            .find('a')
            .first()
            .click();

        cy.wait(6000)
        cy.popUpVoucherClosed();

        cy.get(constants.PRODUCT_PAGE.ADD_TO_CART_BUTTON).click();

        cy.visit('/kosik/obsah')

        cy.get(constants.CHECKOUT_SUMMARY_ORDER_BUTTON).click();

        cy.get('textarea[name="note"]')
            .type('Jupí funguje to!!');

        cy.get(constants.CHECKOUT_SHIPPAY_GO_TO_SHIPPING_BUTTON).click();

        cy.get(constants.SHIPPING_OPTION_GLS).click();
        cy.get(constants.SHIPPING_METOD.CONTINUE_TO_PAYMENT_BUTTON).click();

        cy.get(constants.PAYMENT_METHOD.PAYMENT_OPTION_APPLE_PAY).click();
        //cy.get(constants.CONFIRM_ORDER_BUTTON).click();


    });

    it.only('Contact Form Unregistered - Invalid Data', () => {

        cy.visit('/zeny')

        cy.get('[data-testid="product-list-product-card-vertical-article"]')
            .first()
            .click();

        cy.get('div[data-testid="product-detail-sizes-wrapper-select-sizes-div"]')
            .find('a')
            .first()
            .click();

        cy.wait(6000)
        cy.popUpVoucherClosed();

        cy.get(constants.PRODUCT_PAGE.ADD_TO_CART_BUTTON).click();

        cy.visit('/kosik/kontaktne-udaje')

        cy.get(constants.FORM_PAGE.FIRST_NAME_INPUT)
            .type('Gandalf');

        cy.get(constants.FORM_PAGE.LAST_NAME_INPUT)
            .type('Šedý');

        cy.get(constants.FORM_PAGE.EMAIL_INPUT)
            .type('Gandalf.Šedý@mordor.lotr');


        cy.get(constants.FORM_PAGE.PHONE_INPUT);
        cy.fillField(constants.FORM_PAGE.PHONE_INPUT, formData.phone);

        cy.get(constants.FORM_PAGE.STREET_ADDRESS_INPUT);
        cy.fillField(constants.FORM_PAGE.STREET_ADDRESS_INPUT, formData.street);

        cy.get(constants.FORM_PAGE.CITY_INPUT);
        cy.fillField(constants.FORM_PAGE.CITY_INPUT, formData.city);

        cy.get(constants.FORM_PAGE.POST_CODE_INPUT);
        cy.fillField(constants.FORM_PAGE.POST_CODE_INPUT, formData.postCode);

        cy.get(constants.AGREE_WITH_TERMS_CHECKBOX).check();

        cy.get(constants.CHECKOUT_SHIPPAY_GO_TO_SHIPPING_BUTTON).click();

        cy.get(constants.SHIPPING_OPTION_GLS).click();
        cy.get(constants.SHIPPING_METOD.CONTINUE_TO_PAYMENT_BUTTON).click();

        cy.get(constants.PAYMENT_METHOD.PAYMENT_OPTION_APPLE_PAY).click();
        //cy.get(constants.CONFIRM_ORDER_BUTTON).click();


    });

});
