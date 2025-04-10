import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly signupText: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly signupBtn: Locator;


  constructor(page: Page) {
    this.page = page;
    this.signupText = page.locator('//*[@id="form"]/div/div/div[3]/div/h2');
    this.nameField = page.locator ('[data-qa="signup-name"]')
    this.emailField = page.locator ('[data-qa="signup-email"]')
    this.signupBtn = page.locator ('[data-qa="signup-button"]')
  }

  

  async SignUp(a,b) {
    await this.nameField.fill(a);
    await this.emailField.fill(b);
    await this.signupBtn.click();
  }

  async verifySignUpHeader(){
   await expect(this.signupText).toHaveText("New User Signup!")
  }

 
}
