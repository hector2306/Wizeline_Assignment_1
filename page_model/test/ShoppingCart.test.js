import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import CartPage from '../pages/CartPage'
import  { CREDENTIALS, USER_DATA} from '../data/Constant'

fixture('Shopping cart testing')
    .page `https://www.saucedemo.com/`


test('Users can navigate to shopping cart ', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.ClickCart()
    await t.expect(CartPage.cartHeader.exists).ok()
})

test('Add an item to shopping cart ', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.AddItem()
    await ProductsPage.ClickCart()
    await t.expect(CartPage.cartHeader.exists).ok()
    await t.expect(CartPage.cartItem.exists).ok()
})

test('Validate error message when missing information  ', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.AddItem()
    await ProductsPage.ClickCart()
    await CartPage.checkout()
    await CartPage.clickContinue()
    await t.expect(CartPage.errorMessage.innerText).eql('Error: First Name is required')

})

test('Validate overview page is displaying ', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.AddItem()
    await ProductsPage.ClickCart()
    await CartPage.checkout()
    await CartPage.fillFields(USER_DATA.FIRSTNAME, USER_DATA.LASTNAME, USER_DATA.ZIPCODE)
    await CartPage.clickContinue()
    await t.expect(CartPage.overviewHeader.exists).ok()
 
})

test('Final order item ', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.AddItem()
    await ProductsPage.ClickCart()
    await CartPage.checkout()
    await CartPage.fillFields(USER_DATA.FIRSTNAME, USER_DATA.LASTNAME, USER_DATA.ZIPCODE)
    await CartPage.clickContinue()
    await t.expect(CartPage.cartItem.exists).ok()
})

test('Final order item ', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.AddItem()
    await ProductsPage.ClickCart()
    await CartPage.checkout()
    await CartPage.fillFields(USER_DATA.FIRSTNAME, USER_DATA.LASTNAME, USER_DATA.ZIPCODE)
    await CartPage.clickContinue()
    await CartPage.clickFinishButton()
    await t.expect(CartPage.completeHeader.exists).ok()
})

