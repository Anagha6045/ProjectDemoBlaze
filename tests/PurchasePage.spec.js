import { test } from '@playwright/test';
import AddToCartPage from '../page/AddToCartPage';
import PurchasePage from '../page/PurchasePage';
import testData from '../utils/testData.json';

test('Purchase products in the cart', async ({ page }) => {
    const addToCartPage = new AddToCartPage(page);
    const purchasePage = new PurchasePage(page);

    await page.goto(testData.loginTestData.platformUrl);
    await addToCartPage.addPhonestoTheCart();
    await addToCartPage.addLaptopsToTheCart();
    await purchasePage.checkoutCart();
});
