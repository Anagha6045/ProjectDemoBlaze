import { faker } from '@faker-js/faker';
import testData from '../utils/testData.json';

export default class SignUpPage {
    constructor(page) {
        this.page = page;
        this.signUpLink = page.locator('#signin2');
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.signUpButton = page.getByRole('button', { name: 'Sign up', exact: true });
        this.closeButton =  page.getByRole('button', { name: 'Close', exact: true });
    }

    async signUp() {
        await this.page.goto(testData.loginTestData.platformUrl);
        const username = this.generateUserName();
        const password = testData.password;
        

        await this.signUpLink.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signUpButton.click();
        this.page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Sign up successful.');
        await dialog.accept();
            })
    }

    async signUpClose() {
        await this.page.goto(testData.loginTestData.platformUrl);
        const username = this.generateUserName();
        const password = testData.password;
        

        await this.signUpLink.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.closeButton.click();
       
    }

    generateUserName() {
        return faker.internet.username();
    }


}