import { expect } from '@playwright/test';

export default class LogOutPage {
    constructor(page) {
        this.logoutButton = page.locator('#logout2');
        this.loginButton = page.locator('#login2');
    }

    async logoutFromApplication() {
        await this.logoutButton.click();
        await expect(this.loginButton).toBeVisible();
    }
}