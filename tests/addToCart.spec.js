import { test } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import AddToCartPage from '../page/AddToCartPage';

test('Add phones to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addToCartPage = new AddToCartPage(page);

    await loginPage.loginIntoApplication();
    await loginPage.enterValidCredentials();
    await addToCartPage.addPhonestoTheCart();
});

test('Add a laptop to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addToCartPage = new AddToCartPage(page);

    await loginPage.loginIntoApplication();
    await loginPage.enterValidCredentials();
    await addToCartPage.addLaptopsToTheCart();
});