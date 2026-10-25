    import test, { expect } from '@playwright/test';
    import testData from '../utils/testData.json'

    export default class LoginPage{

        constructor(page)
        {
            this.page = page;
            this.loginOption = page.locator('#login2');
            this.loginUserName = page.locator('#loginusername');
            this.loginPassword = page.locator('#loginpassword');
            this.loginButton = page.locator('//button[text()="Log in"]');
            
        }
    async  loginIntoApplication()
    {
     await this.page.goto(testData.loginTestData.platformUrl)
     await this.loginOption.click();
  
    }

    async enterValidCredentials()
    {
     await this.loginUserName.fill(testData.loginTestData.username01);
     await this.loginPassword.fill(testData.loginTestData.password);
     await this.loginButton.click();
    }

     async enterValidUserNameInValidPassword()
    {
     await this.loginUserName.fill(testData.loginTestData.username01);
     await this.loginPassword.fill(testData.loginTestData.invalidPassword);

      const dialogPromise = this.inValidPasswordMessage();
        await this.loginButton.click();
        await dialogPromise;
    }

     async enterInvalidUserNameValidPassword()
    {
     await this.loginUserName.fill(testData.loginTestData.invalidUserName);
     await this.loginPassword.fill(testData.loginTestData.password);
     const dialogPromise = this.inValidUsernameMessage();
        await this.loginButton.click();
        await dialogPromise;
    }

     async enterInvalidUserNameInvalidPassword()
    {
     await this.loginUserName.fill(testData.loginTestData.invalidUserName);
     await this.loginPassword.fill(testData.loginTestData.invalidPassword);
     const dialogPromise = this.inValidUsernameMessage();
        await this.loginButton.click();
        await dialogPromise;
    }

    async inValidUsernameMessage()
    {
       const dialog = await this.page.waitForEvent('dialog');

        expect(dialog.message()).toBe('User does not exist.');

        await dialog.accept();
    }

     async inValidPasswordMessage()
    {
       const dialog = await this.page.waitForEvent('dialog');

        expect(dialog.message()).toBe('Wrong password.');

        await dialog.accept();
    }
}

