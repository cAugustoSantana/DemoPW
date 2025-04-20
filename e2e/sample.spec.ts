const {test,expect} = require('@playwright/test')

import { log } from 'console';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignUpPage } from '../pages/signup.page';
import { AcctCreatedPage} from '../pages/acctCreated.page';
import { AccDeletedPage } from '../pages/acctDeleted.page';

test.beforeEach( async ({page}) => {

    await page.goto('https://www.automationexercise.com/')
})


test("Register User", async function({ page }) {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    const acctCreatedPage = new AcctCreatedPage(page);
    const accDeletedPage = new AccDeletedPage(page);

    /** 1-Verify that home page is visible successfully */
    await homePage.verifyPageTitle();  
    await homePage.clickSignUp();
    await loginPage.verifySignUpHeader();
    await loginPage.signUp("Cesar", "csantanaDLS+32@proton.me");
    await signUpPage.signUp("Cesar","csantanaDLS@proton.me","password","30","June","1998","Ave. Principal","United States","Florida","Doral","33198","6789998212")
    await acctCreatedPage.verifyacctCreation();
    await homePage.deleteAccount();
    await accDeletedPage.verifyacctDeletion();
  

});

test("Correct Login", async function({ page }) {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    const acctCreatedPage = new AcctCreatedPage(page);
    const accDeletedPage = new AccDeletedPage(page);

    /** 1-Verify that home page is visible successfully */

    await homePage.clickSignUp();
    await loginPage.signUp("Cesar", "csantanaDLS+37@proton.me");
    await signUpPage.signUp("Cesar","csantanaDLS@proton.me","password","30","June","1998","Ave. Principal","United States","Florida","Doral","33198","6789998212")
    await acctCreatedPage.verifyacctCreation();
    await homePage.logout();
    await loginPage.login("csantanaDLS+37@proton.me", "password");
    await homePage.verifyLogin("Cesar");
    await homePage.deleteAccount();
    await accDeletedPage.verifyacctDeletion();

  

});


