import { test } from '@playwright/test';
import AddToCartPage from '../page/AddToCartPage';
import LoginPage from '../page/LoginPage';
import PurchasePage from '../page/PurchasePage';

test('Purchase products in the cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const addToCartPage = new AddToCartPage(page);
    const purchasePage = new PurchasePage(page);

    await loginPage.loginIntoApplication();
    await loginPage.enterValidCredentials();
    await addToCartPage.addPhonestoTheCart();
    await addToCartPage.addLaptopsToTheCart();
    await purchasePage.checkoutCart();
});
