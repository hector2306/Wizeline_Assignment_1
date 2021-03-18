import { Selector, t } from 'testcafe'

class ProductsPage {
    constructor (){
        this.header = Selector('.product_label')
        this.hamburguerButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.cartButton = Selector('#shopping_cart_container')
        this.addToCart = Selector('.pricebar > button')
       
    }

    async logout() {
        await t.click(this.hamburguerButton)
        await t.click(this.logoutButton)
    
    }

    async ClickCart() {
        await t.click(this.cartButton)
    }

    async AddItem() {
        await t.click(this.addToCart)
    }
}



export default new ProductsPage()