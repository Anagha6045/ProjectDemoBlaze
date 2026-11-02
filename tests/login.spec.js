import { test } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import AddToCartPage from '../page/AddToCartPage';
import testData from '../utils/testData.json'

test('Login with Valid Credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addToCartPage = new AddToCartPage(page);
    const username = testData.loginTestData.username01;
    const password = testData.loginTestData.password;

    await loginPage.loginIntoApplication();
    await loginPage.enterCredentials(username,password);
    await addToCartPage.userWelcome();
    
    await expect(loginPage.logoutButton).toBeVisible();
    await expect(loginPage.welcomeUserName).toContainText(username01);
});
 
test('Login with Valid Username and Invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

     const username = testData.loginTestData.username01
    const password = testData.loginTestData.invalidPassword
    await loginPage.loginIntoApplication();
    await loginPage.enterCredentials(username,password);
    loginPage.InValidPasswordmessage();
});

test('Login with Invalid Username and Valid Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const username = testData.loginTestData.invalidUserName
    const password = testData.loginTestData.password

    await loginPage.loginIntoApplication();
    await loginPage.enterCredentials(username,password);
    loginPage.InvalidUserNameMessage();

    
});

test('Login with Invalid Username and Password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const username = testData.loginTestData.invalidUserName
    const password = testData.loginTestData.invalidPassword
   await loginPage.loginIntoApplication();
    await loginPage.enterCredentials(username,password);
    await loginPage.InvalidUserNameMessage();
});