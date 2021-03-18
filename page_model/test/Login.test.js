import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import  { CREDENTIALS } from '../data/Constant'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`


test('Users can login using valid credentials', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductsPage.header.exists).ok()
})

test('Users can not login using not valid credentials', async t => {
    await t
    .typeText(LoginPage.usernameField, CREDENTIALS.INVALID_USER.USERNAME)
    .typeText(LoginPage.passwordField, CREDENTIALS.INVALID_USER.PASSWORD)
    .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok
    await t.expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')

})

test('Users can log out from product page', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await ProductsPage.logout()
    await t.expect(LoginPage.usernameField.exists).ok()
    await t.expect(LoginPage.passwordField.exists).ok()
})



