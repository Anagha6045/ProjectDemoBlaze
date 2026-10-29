import { expect, test } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import LogOutPage from '../page/LogOutPage';

test('Log out after logging in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const logOutPage = new LogOutPage(page);

    await loginPage.loginIntoApplication();
    await loginPage.enterValidCredentials();
    await expect(logOutPage.logoutButton).toBeVisible();

    await logOutPage.logoutFromApplication();
});
