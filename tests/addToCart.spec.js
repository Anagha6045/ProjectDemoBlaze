import { test } from '@playwright/test';
import LoginPage from '../page/LoginPage';
import AddToCartPage from '../page/AddToCartPage';
import testData from '../utils/testData.json'

test('Add phones to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addToCartPage = new AddToCartPage(page);

    await loginPage.loginIntoApplication();
    await loginPage.enterCredentials(testData.loginTestData.username,testData.loginTestData.password);
    await addToCartPage.addPhonestoTheCart();
});

test('Add a laptop to the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addToCartPage = new AddToCartPage(page);

   await loginPage.loginIntoApplication();
    await loginPage.enterCredentials(testData.loginTestData.username,testData.loginTestData.password);
    await addToCartPage.addLaptopsToTheCart();
});