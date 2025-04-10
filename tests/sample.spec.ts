const {test,expect} = require('@playwright/test')

import { log } from 'console';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignUpPage } from '../pages/signup.page';

test.beforeEach( async ({page}) => {

    await page.goto('https://www.automationexercise.com/')
})


test("Register User", async function({ page }) {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);

    /** 1-Verify that home page is visible successfully */
    await homePage.verifyPageTitle();  
    await homePage.clickSignUp();
    await loginPage.verifySignUpHeader();
    await loginPage.SignUp("Cesar ", "csantanaDLS@proton.me")
    await 
});