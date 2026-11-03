import { expect, test } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import SignUpPage from '../page/SignUpPage';
import testData from '../utils/testData.json';

test('Login with valid credentials', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);
    const credentials = await signUpPage.registerAccount();

    await loginPage.loginIntoApplication();
    await loginPage.enterValidCredentials(credentials.username, credentials.password);

    await expect(loginPage.welcomeUserName).toContainText(credentials.username);
});

test('Login with valid username and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginIntoApplication();
    await loginPage.enterInvalidCredentials(
        testData.loginTestData.username01,
        testData.loginTestData.invalidPassword,
        'Wrong password.'
    );
});

test('Login with invalid username and valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginIntoApplication();
    await loginPage.enterInvalidCredentials(
        testData.loginTestData.invalidUserName,
        testData.loginTestData.password,
        'User does not exist.'
    );
});

test('Login with invalid username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginIntoApplication();
    await loginPage.enterInvalidCredentials(
        testData.loginTestData.invalidUserName,
        testData.loginTestData.invalidPassword,
        'User does not exist.'
    );
});
