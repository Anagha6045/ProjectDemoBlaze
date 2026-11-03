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

    async enterCredentials(username, password) {
        await this.loginUserName.fill(username);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
    }
}
