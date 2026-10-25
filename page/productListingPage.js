import { expect } from '@playwright/test';
import testData from '../utils/testData.json';

export default class ProductListingPage{

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
        this.openCartItems =page.locator('//a[text()="Cart"]')
        this.placeOrder  = page.locator('//button[text()="Place Order"]')
        this.name = page.locator('#name')
        this.country = page.locator('#country')
        this.city =page.locator('#city')
        this.card = page.locator('#card')
        this.month = page.locator('#month')
        this.year = page.locator('#year')
        this.purchaseItem = page.locator('//button[text()="Purchase"]')
    }

    async userWelcome()
    {
        await expect(this.welcomeUserName.toBeVisible());
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

    async reviewCartItems()
    {
        await this.openCartItems.click();
        await this.placeOrder.click();
        await this.name.fill(testData.orderDetails.name);
        await this.country.fill(testData.orderDetails.country);
        await this.city.fill(testData.orderDetails.city);
        await this.card.fill(testData.orderDetails.card);
        await this.month.fill(testData.orderDetails.month);
        await this.year.fill(testData.orderDetails.year);
        await this.purchaseItem.scrollIntoViewIfNeeded();
        await this.purchaseItem.click();

    }

    async acceptProductAddPopUp()
    {
        const dialog = await this.page.waitForEvent('dialog');
        expect(dialog.message()).toBe('Product added.');
        await dialog.accept();
    }
}

