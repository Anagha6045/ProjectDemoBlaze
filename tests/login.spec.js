import { expect, test } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import SignUpPage from '../page/SignUpPage';
import testData from '../utils/testData.json';

test('Login with valid credentials', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);
    const credentials = await signUpPage.registerAccount();

    await loginPage.loginIntoApplication();
    await loginPage.enterCredentials(credentials.username, credentials.password);

    await expect(loginPage.logoutButton).toBeVisible();
    await expect(loginPage.welcomeUserName).toContainText(credentials.username);
});

test('Login with valid username and invalid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginIntoApplication();
    const dialogPromise = page.waitForEvent('dialog');
    await loginPage.enterCredentials(
        testData.loginTestData.username01,
        testData.loginTestData.invalidPassword
    );
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe('Wrong password.');
    await dialog.accept();
    await expect(loginPage.logoutButton).not.toBeVisible();
});

test('Login with invalid username and valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginIntoApplication();
    const dialogPromise = page.waitForEvent('dialog');
    await loginPage.enterCredentials(
        testData.loginTestData.invalidUserName,
        testData.loginTestData.password
    );
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe('User does not exist.');
    await dialog.accept();
    await expect(loginPage.logoutButton).not.toBeVisible();
});

test('Login with invalid username and password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.loginIntoApplication();
    const dialogPromise = page.waitForEvent('dialog');
    await loginPage.enterCredentials(
        testData.loginTestData.invalidUserName,
        testData.loginTestData.invalidPassword
    );
    const dialog = await dialogPromise;
    expect(dialog.message()).toBe('User does not exist.');
    await dialog.accept();
    await expect(loginPage.logoutButton).not.toBeVisible();
});
