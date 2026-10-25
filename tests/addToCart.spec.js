import {test} from '@playwright/test'
import LoginPage from '../page/LoginPage'
import ProductListingPage from '../page/productListingPage';

test('Login into the application', async({page})=>{

    const loginPage = new LoginPage(page);
    await loginPage.loginIntoApplication();
    await loginPage.enterValidCredentials();
     const addProducts = new ProductListingPage(page);
    await addProducts.addPhonestoTheCart();
    await addProducts.addLaptopsToTheCart();
    await addProducts.reviewCartItems();
})

/*test('Add products to the cart', async({page})=>{

    const addProducts = new ProductListingPage(page);
    await addProducts.addPhonestoTheCart();
    await addProducts.addLaptopsToTheCart();
})*/