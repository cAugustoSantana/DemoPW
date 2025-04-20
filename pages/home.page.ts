import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly signup: Locator;
  readonly loggedIn: Locator;
  readonly deleteLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.locator(':has-text("Home")');
    this.signup = page.locator ('[href="/login"]')
    this.loggedIn = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[10]');
    this.deleteLink = page.locator ('//*[@id="header"]/div/div/div/div[2]/div/ul/li[5]/a')
  }

  async clickHome() {
    await this.homeLink.click();
  }

  async clickSignUp() {
    await expect(this.signup).toHaveText("Signup / Login");
    await this.signup.click();
  }

  async verifyPageTitle() {
    await expect(this.page).toHaveTitle(/Automation Exercise/);
    console.log(this.homeLink)
  }
  async deleteAccount( ) {
    await this.deleteLink.click();
  }
}
