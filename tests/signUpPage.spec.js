import{test} from '@playwright/test'
import SignUpPage from '../page/SignUpPage'

test('Sign up to the application',async({page})=>{
    const signUp_Page = new SignUpPage(page);
    await signUp_Page.signUp();   
})
