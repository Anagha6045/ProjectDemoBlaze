import { test } from '@playwright/test';
import AddToCartPage from '../page/AddToCartPage';
import testData from '../utils/testData.json'

test('Add phones to the cart', async ({ page }) => {
    const addToCartPage = new AddToCartPage(page);

    await page.goto(testData.loginTestData.platformUrl);
    await addToCartPage.addPhonestoTheCart();
});

test('Add a laptop to the cart', async ({ page }) => {
    const addToCartPage = new AddToCartPage(page);

    await page.goto(testData.loginTestData.platformUrl);
    await addToCartPage.addLaptopsToTheCart();
});