import { expect, test } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import LogOutPage from '../page/LogOutPage';
import SignUpPage from '../page/SignUpPage';

test('Log out after logging in', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    const loginPage = new LoginPage(page);
    const logOutPage = new LogOutPage(page);
    const credentials = await signUpPage.registerAccount();

    await loginPage.loginIntoApplication();
    await loginPage.enterCredentials(credentials.username, credentials.password);
    await expect(logOutPage.logoutButton).toBeVisible();

    await logOutPage.logoutFromApplication();
});
