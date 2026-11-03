import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';
import testData from '../utils/testData.json';

export default class SignUpPage {
    constructor(page) {
        this.page = page;
        this.signUpLink = page.locator('#signin2');
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.signUpButton = page.getByRole('button', { name: 'Sign up', exact: true });
        this.signUpModal = page.locator('#signInModal');
        this.closeButton = this.signUpModal.locator('.modal-footer')
            .getByRole('button', { name: 'Close', exact: true });
    }

    async registerAccount() {
        await this.page.goto(testData.loginTestData.platformUrl);
        const username = this.generateUserName();
        const password = testData.loginTestData.password;

        await this.signUpLink.click();
        await this.username.fill(username);
        await this.password.fill(password);
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.signUpButton.click();
        const dialog = await dialogPromise;
        expect(dialog.message()).toBe('Sign up successful.');
        await dialog.accept();
        return { username, password };
    }

    async signUp() {
        await this.registerAccount();
    }

    async signUpClose() {
        await this.page.goto(testData.loginTestData.platformUrl);
        const username = this.generateUserName();
        const password = testData.loginTestData.password;

        await this.signUpLink.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.closeButton.click();
        await expect(this.signUpModal).toBeHidden();
    }

    generateUserName() {
        return faker.internet.username();
    }


}