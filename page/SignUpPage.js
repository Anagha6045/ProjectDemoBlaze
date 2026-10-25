import testData from '../utils/testData.json';

export default class SignUpPage {
    constructor(page) {
        this.page = page;
        this.signUpLink = page.locator('#signin2');
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.signUpButton = page.getByRole('button', { name: 'Sign up', exact: true });
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

    generateUserName()
    {
        const now = new Date();

        const time = String(now.getHours()).padStart(2,'0')+ String(now.getMinutes()).padStart(2,'0')
        const date = String(now.getDate()).padStart(2,'0') + String(now.getMonth()+1).padStart(2,'0') + String.apply(now.getFullYear()).slice(-2);

        return `${testData.username}${time}_${date}`;
    }


}