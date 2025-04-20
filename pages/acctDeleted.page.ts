import { expect, Locator, Page } from '@playwright/test';


export class AccDeletedPage {

    readonly page: Page;
    readonly Header: Locator;
    readonly continueBtn: Locator



    constructor(page: Page) {
        this.page = page;
        this.Header = page.locator('//*[@id="form"]/div/div/div/h2');
        this.continueBtn = page.locator('[data-qa="continue-button"]');
    }

    async verifyacctDeletion(){
        await expect(this.Header).toHaveText("Account Deleted!")
        await this.continueBtn.click();
       }
}