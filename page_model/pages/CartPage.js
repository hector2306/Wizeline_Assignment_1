import { Selector, t } from 'testcafe'

class CartPage {

    constructor() {
        this.cartHeader= Selector('.subheader').withExactText('Your Cart')
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.cartItem = Selector('.cart_item')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage = Selector ('[data-test="error"]')
        this.firstName = Selector ('#first-name')
        this.lastName = Selector ('#last-name')
        this.postalCode = Selector ('#postal-code')
        this.overviewHeader= Selector('.subheader').withExactText('Checkout: Overview')
        this.finishButton= Selector('.btn_action.cart_button')
        this.completeHeader= Selector('.complete-header')



    }

    async checkout() {
        await t.click(this.checkoutButton)
    }

    async clickContinue() {
        await t.click(this.continueButton)
    }

    async fillFields(fName, lName, code) {
        await t.typeText(this.firstName, fName, {paste: true})
        await t.typeText(this.lastName, lName, {paste: true})
        await t.typeText(this.postalCode, code, {paste: true})
    }

    async clickFinishButton() {
        await t.click(this.finishButton)
    }
}

export default new CartPage()