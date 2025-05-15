import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signupText: Locator;
  readonly nameFieldLogin: Locator;
  readonly emailFieldLogin: Locator;
  readonly loginBtn: Locator;
  readonly nameFieldSignUp: Locator;
  readonly emailFieldSignUp: Locator;
  readonly signupBtnSignUp: Locator;
  readonly incorrectEmail: Locator;
  readonly existingEmail: Locator;


  constructor(page: Page) {
    this.page = page;
    this.signupText = page.locator('//*[@id="form"]/div/div/div[3]/div/h2');
    this.nameFieldSignUp = page.locator ('[data-qa="signup-name"]');
    this.emailFieldSignUp = page.locator ('[data-qa="signup-email"]');
    this.signupBtnSignUp = page.locator ('[data-qa="signup-button"]');
    this.nameFieldLogin = page.locator ('[data-qa="login-email"]');
    this.emailFieldLogin = page.locator ('[data-qa="login-password"]');
    this.loginBtn = page.locator ('[data-qa="login-button"]');
    this.incorrectEmail = page.locator ('//*[@id="form"]/div/div/div[1]/div/form/p');
    this.existingEmail = page.locator('//*[@id="form"]/div/div/div[3]/div/form/p')
  }

  async login(a,b) {
    await this.nameFieldLogin.fill(a);
    await this.emailFieldLogin.fill(b);
    await this.loginBtn.click();
  }
  

  async signUp(a,b) {
    await this.nameFieldSignUp.fill(a);
    await this.emailFieldSignUp.fill(b);
    await this.signupBtnSignUp.click();
  }

  async verifySignUpHeader(){
   await expect(this.signupText).toHaveText("New User Signup!")
  }

  async verifyIncorrectEmail(){
    await expect(this.incorrectEmail).toHaveText("Your email or password is incorrect!")
   }

   async verifyExistingEmail(){
    await expect(this.existingEmail).toHaveText("Email Address already exist!")
   }
 
}
