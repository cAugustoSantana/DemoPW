import { expect, Locator, Page } from '@playwright/test';


export class AcctCreatedPage {
    readonly page: Page;
    readonly Header: Locator;
    readonly continueBtn: Locator
    
  
    constructor(page: Page) {
      this.page = page;
      this.Header = page.locator('//*[@id="form"]/div/div/div/h2');
      this.continueBtn = page.locator('[data-qa="continue-button"]');
    }
  
    
  
    async verifyacctCreation(){
        await expect(this.Header).toHaveText("Account Created!")
        await this.continueBtn.click();
       }
  }