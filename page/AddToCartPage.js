import { expect } from '@playwright/test';

export default class AddToCartPage{

    constructor(page)
    {
        this.page = page;
        this.welcomeUserName = page.locator('#nameofuser');
        this.samsungGalaxy = page.locator('//a[text()="Samsung galaxy s6"]')
        this.nokiaLumia =page.locator('//a[text()="Nokia lumia 1520"]')
        this.addToCart =page.locator('//a[text()="Add to cart"]')
        this.homePageBtn=page.locator('#nava')
        this.laptops = page.locator('//a[text()="Laptops"]')
        this.Sonyvaioi5 =page.locator('//a[text()="Sony vaio i5"]')
    }

    async userWelcome()
    {
        await expect(this.welcomeUserName).toBeVisible();
    }

    async addPhonestoTheCart()
    {
        await this.samsungGalaxy.click();
        const samsungDialog = this.acceptProductAddPopUp();
        await this.addToCart.click();
        await samsungDialog;
        await this.homePageBtn.click();
        await this.nokiaLumia.click();
        const nokiaDialog = this.acceptProductAddPopUp();
        await this.addToCart.click();
        await nokiaDialog;
    }

    async addLaptopsToTheCart()
    {
        await this.homePageBtn.click();
        await this.laptops.click();
        await this.Sonyvaioi5.click();
        const laptopDialog = this.acceptProductAddPopUp();
        await this.addToCart.click();
        await laptopDialog;
    }

    async acceptProductAddPopUp()
    {
        const dialog = await this.page.waitForEvent('dialog');
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    }
}
