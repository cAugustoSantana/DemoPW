import { expect, Locator, Page } from '@playwright/test';

export class contactUsPage {
    readonly page: Page;
    readonly getInTouch: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly subject: Locator;
    readonly message: Locator;
    readonly upload: Locator;




  
    constructor(page: Page) {
      this.page = page;
      this.getInTouch = page.locator('//*[@id="contact-page"]/div[2]/div[1]/div/h2');
      this.name = page.locator('[data-qa="name"]');
      this.email = page.locator('[data-qa="email"]');
      this.subject = page.locator('[data-qa="subject"]');
      this.message = page.locator ('[data-qa="message"]');
      this.upload = page.locator('[name="upload_file"]');

    }


    
  
    
  }