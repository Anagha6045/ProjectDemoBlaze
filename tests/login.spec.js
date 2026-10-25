import {test} from '@playwright/test'
import LoginPage from '../page/LoginPage'
import ProductList from '../page/productListingPage'
import ProductListingPage from '../page/productListingPage';

test('Login with Valid Credentials', async({page})=>{
  const loginPage = new LoginPage(page);
  const prodList = new  ProductListingPage(page)
 await loginPage.loginIntoApplication();
  await loginPage.enterValidCredentials();
  await prodList.welcomeUserName();

})
 
test('Login with Valid Username and Invalid password', async ({page})=>{
   const loginPage = new LoginPage(page);
    await loginPage.loginIntoApplication();
    await loginPage.enterValidUserNameInValidPassword();

})

test('Login with Invalid Username and Valid Password', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.loginIntoApplication();
    await loginPage.enterInvalidUserNameValidPassword();
})

test('Login with Invalid Username and Password', async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.loginIntoApplication();
    await loginPage.enterInvalidUserNameInvalidPassword();

})