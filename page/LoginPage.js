import { expect } from '@playwright/test';
import testData from '../utils/testData.json';

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginOption = page.locator('#login2');
        this.loginUserName = page.locator('#loginusername');
        this.loginPassword = page.locator('#loginpassword');
        this.loginButton = page.locator('//button[text()="Log in"]');
        this.logoutButton = page.locator('#logout2');
        this.welcomeUserName = page.locator('#nameofuser');
    }

    async loginIntoApplication() {
        await this.page.goto(testData.loginTestData.platformUrl);
        await this.loginOption.click();
    }

    async enterValidCredentials(username, password) {
        await this.enterCredentials(username, password);
        await expect(this.logoutButton).toBeVisible();
    }

    async enterCredentials(username, password) {
        await this.loginUserName.fill(username);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }

    async enterInvalidCredentials(username, password, expectedMessage) {
        await this.loginUserName.fill(username);
        await this.loginPassword.fill(password);

        const dialogPromise = this.page.waitForEvent('dialog');
        await this.loginButton.click();
        const dialog = await dialogPromise;

        expect(dialog.message()).toBe(expectedMessage);
        await dialog.accept();
        await expect(this.logoutButton).not.toBeVisible();
    }
}
