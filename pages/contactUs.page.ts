import { expect, Locator, Page } from '@playwright/test';

export class ContactUsPage {
    readonly page: Page;
    readonly getInTouch: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly subject: Locator;
    readonly message: Locator;
    readonly upload: Locator;
    readonly submit: Locator;
    readonly success: Locator;
    readonly home: Locator;




  
    constructor(page: Page) {
      this.page = page;
      this.getInTouch = page.locator('//*[@id="contact-page"]/div[2]/div[1]/div/h2');
      this.name = page.locator('[data-qa="name"]');
      this.email = page.locator('[data-qa="email"]');
      this.subject = page.locator('[data-qa="subject"]');
      this.message = page.locator ('[data-qa="message"]');
      this.upload = page.locator('[name="upload_file"]');
      this.submit = page.locator('[data-qa="submit-button"]');
      this.success = page.locator('//*[@id="contact-page"]/div[2]/div[1]/div/div[2]');
      this.home = page.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[1]/a');

    }

    async uploadFile(name,email,subject,message,filePath){

      await this.name.fill(name);
      await this.email.fill(email);
      await this.subject.fill(subject);
      await this.message.fill(message);
      await this.upload.click();
      await this.upload.setInputFiles(filePath);

      await this.submit.click();

      this.page.on("dialog", async (alert) =>
      {
        const text = alert.message
        console.log(text);
        await alert.accept();
      })


    }
    async verifyGetInTouch(){
       
    }
    async verifySuccess(){
      
      await expect(this.success).toHaveText( "Success! Your details have been submitted successfully.");
    }

    async goHome(){
      
      await this.home.click();
    }
    
  
    
  }