import { expect } from '@playwright/test';
import testData from '../utils/testData.json';

export default class PurchasePage {
    constructor(page) {
        this.page = page;
        this.openCartItems = page.locator('//a[text()="Cart"]');
        this.cartItems = page.locator('#tbodyid tr');
        this.cartContents = page.locator('#tbodyid');
        this.placeOrder = page.locator('//button[text()="Place Order"]');
        this.name = page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.card = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.purchaseButton = page.locator('//button[text()="Purchase"]');
        this.purchaseConfirmation = page.locator('.sweet-alert h2');
        this.confirmationButton = page.locator('.sweet-alert button.confirm');
    }

    async checkoutCart() {
        await this.openCartItems.click();
        await expect(this.cartItems.first()).toBeVisible();
        await expect(this.cartContents).toContainText('Samsung galaxy s6');
        await expect(this.cartContents).toContainText('Nokia lumia 1520');
        await expect(this.cartContents).toContainText('Sony vaio i5');

        await this.placeOrder.click();
        await this.name.fill(testData.orderDetails.name);
        await this.country.fill(testData.orderDetails.country);
        await this.city.fill(testData.orderDetails.city);
        await this.card.fill(testData.orderDetails.card);
        await this.month.fill(testData.orderDetails.month);
        await this.year.fill(testData.orderDetails.year);
        await this.purchaseButton.click();

        await expect(this.purchaseConfirmation).toHaveText('Thank you for your purchase!');
        await this.confirmationButton.click();
    }
}
