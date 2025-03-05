
export const LOGIN_CREDENTIALS = {
    EMAIL: 'uradnicek@brilo.cz',
    PASSWORD: 'JanojeHonza11'
};


export const formData = {
    firstName: 'David',
    lastName: 'Úradníček',
    email: 'david.uradnicek@csapparel.cz',
    phone: '+421903415618',
    street: 'Telecí 93',
    city: 'České Bukvice',
    postCode: '37006'
  };

export const HOME_PAGE = {
    LOGIN_ON_HEADER: '[data-testid="top-bar-sign-in-link"]',
    FLY_CART_BUTTON: '[data-testid="fly-cart-go-to-cart-link"]',
    FLY_CART_CLOSE_BUTTON: 'button[data-testid="fly-cart-close-button"]',
   
};
  
export const LOGIN_PAGE = {
    IMPUT_EMAIL: 'input[name="email"]',
    IMPUT_PASSWORD: 'input[name="password"]',
    LOGIN_BUTTON: 'button[type="submit"].CustomButton_customButton__kKyRh',
    
};
  
export const PRODUCT_PAGE = {
    ADD_TO_CART_BUTTON: 'div.mt-8.hidden.lg\\:block button[data-testid="add-to-cart-submit-button"]',
    
};

export const CHECKOUT_PAGE = {
    CHECKOUT_LOGIN_BUTTON: 'button[data-testid="checkout-login-promo-sign-in-button"]',
    CHECKOUT_ORDER_BUTTON: 'span[data-testid="checkout-summary-bar-order-cart-button"]',
    CHECKOUT_SUMMARY_ORDER_BUTTON: 'span[data-testid="checkout-summary-bar-order-cart-button"]',
};


export const FORM_PAGE = {
    FIRST_NAME_INPUT: 'input[name="firstname"]',
    LAST_NAME_INPUT: 'input[name="lastname"]',
    EMAIL_INPUT: 'input[name="email"]',
    PHONE_INPUT: 'input[name="phoneNumber"]',
    STREET_ADDRESS_INPUT: 'input[name="streetAddress"]',
    CITY_INPUT: 'input[name="city"]',
    POST_CODE_INPUT: 'input[name="postalCode"]',
    AGREE_WITH_TERMS_CHECKBOX: '[data-testid="checkout-contacts-agree-with-terms-checkbox"]',
    CHECKOUT_SHIPPAY_GO_TO_SHIPPING_BUTTON: '[data-testid="checkout-shippay-go-to-shipping-button"]',

  };
  
export const SHIPPING_METOD = {
    SHIPPING_OPTION_GLS: '[data-testid="checkout-select-option-128"]', 
    SHIPPING_OPTION_SLOVENSKA_POSTA: '[data-testid="checkout-select-option-92"]',
    SHIPPING_OPTION_EUROVEA_PICKUP: '[data-testid="checkout-select-option-131"]',
    CONTINUE_TO_PAYMENT_BUTTON: '[data-testid="checkout-shippay-go-to-payment-button"]',
};

export const PAYMENT_METHOD = {
    PAYMENT_OPTION_CARD: '[data-testid="checkout-select-option-11"]', 
    PAYMENT_OPTION_APPLE_PAY: '[data-testid="checkout-select-option-89"]', 
    PAYMENT_OPTION_GOOGLE_PAY: '[data-testid="checkout-select-option-63"]', 
    PAYMENT_OPTION_KLARNA: '[data-testid="checkout-select-option-106"]', 
    PAYMENT_OPTION_BANK_TRANSFER: '[data-testid="checkout-select-option-12"]', 
    PAYMENT_OPTION_COD: '[data-testid="checkout-select-option-23"]', 
    CONFIRM_ORDER_BUTTON: '[data-testid="checkout-shippay-order-now-button"]',

};
