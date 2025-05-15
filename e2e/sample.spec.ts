const {test,expect} = require('@playwright/test')

import { log } from 'console';
import { HomePage } from '../pages/home.page';
import { LoginPage } from '../pages/login.page';
import { SignUpPage } from '../pages/signup.page';
import { AcctCreatedPage} from '../pages/acctCreated.page';
import { AccDeletedPage } from '../pages/acctDeleted.page';
import { ContactUsPage } from '../pages/contactUs.page';
import { verify } from 'crypto';

test.beforeEach( async ({page}) => {

    await page.goto('https://www.automationexercise.com/')
})

/** Test Case 1: Register User */
test("Register User", async function({ page }) {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    const acctCreatedPage = new AcctCreatedPage(page);
    const accDeletedPage = new AccDeletedPage(page);

    
    await homePage.verifyPageTitle();  
    await homePage.clickSignUp();
    await loginPage.verifySignUpHeader();
    await loginPage.signUp("Cesar", "csantanaDLS+32@proton.me");
    await signUpPage.signUp("Cesar","csantanaDLS@proton.me","password","30","June","1998","Ave. Principal","United States","Florida","Doral","33198","6789998212")
    await acctCreatedPage.verifyacctCreation();
    await homePage.deleteAccount();
    await accDeletedPage.verifyacctDeletion();
    
  

});


/** Test Case 2: Login User with correct email and password */
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

/** Test Case 3: Login User with incorrect email and password */
test("Incorrect Login", async function({ page }) {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    const acctCreatedPage = new AcctCreatedPage(page);
    const accDeletedPage = new AccDeletedPage(page);

    

    await homePage.clickSignUp();
    await loginPage.login("csantanaDLS@proton.me", "password");
    await loginPage.verifyIncorrectEmail();


  

});


/** Test Case 4: Logout User */
test("Logout", async function({ page }) {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    const acctCreatedPage = new AcctCreatedPage(page);
   

    /** 1-Verify that home page is visible successfully */
    await homePage.verifyPageTitle();  
    await homePage.clickSignUp();
    await loginPage.signUp("Cesar", "csantanaDLS+80@proton.me");
    await signUpPage.signUp("Cesar","csantanaDLS+80@proton.me","password","30","June","1998","Ave. Principal","United States","Florida","Doral","33198","6789998212")
    await acctCreatedPage.verifyacctCreation();
    await homePage.logout();


  

});

/**Test Case 5: Register User with existing email */
test ("Register User with existing email", async function ({page}){

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const signUpPage = new SignUpPage(page);
    const acctCreatedPage = new AcctCreatedPage(page);
   

    /** 1-Verify that home page is visible successfully */
    await homePage.verifyPageTitle();  
    await homePage.clickSignUp();
    await loginPage.signUp("Cesar", "csantanaDLS+89@proton.me");
    await signUpPage.signUp("Cesar","csantanaDLS+89@proton.me","password","30","June","1998","Ave. Principal","United States","Florida","Doral","33198","6789998212")
    await acctCreatedPage.verifyacctCreation();
    await homePage.logout();
    await loginPage.signUp("Cesar", "csantanaDLS+89@proton.me");
    await loginPage.verifyExistingEmail();

}); 

 
/**Test Case 6: Contact Us Form */
test ("Contact Us Form", async function ({page}){


    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);
   

    /** 1-Verify that home page is visible successfully */
    await homePage.verifyPageTitle();  
    await homePage.contactUs();
    await contactUsPage.verifyGetInTouch();
    await contactUsPage.uploadFile("cesar","csantanaDLS@proton.me","subject","message",'../playwright/fixtures/contactUs.pdf');
    await contactUsPage.verifySuccess();
    
  
}); 
