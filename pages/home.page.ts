import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly homeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.locator(':has-text("Home")');
  }

  async clickHome() {
    await this.homeLink.click();
  }

  async verifyPageTitle() {
    await expect(this.page).toHaveTitle(/Automation Exercise/);
    console.log(this.homeLink)
  }
}
