import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly signup: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.locator(':has-text("Home")');
    this.signup = page.locator ('[href="/login"]')
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
}
