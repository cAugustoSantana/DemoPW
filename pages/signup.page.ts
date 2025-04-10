import { expect, Locator, Page } from '@playwright/test';

export class SignUpPage {
  readonly page: Page;
  readonly signupHeader: Locator;
  readonly mrRadioBtn: Locator;
  readonly mrsRadioBtn: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly signupBtn: Locator;
  readonly passwordField :Locator;
  readonly dateField :Locator;
  readonly monthField :Locator;
  readonly yearField: Locator;
  readonly newsletter: Locator;
  readonly offers: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly address: Locator;
  readonly address2: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobileNumber: Locator;
  readonly createBtn: Locator;


  constructor(page: Page) {
    this.page = page;
    this.signupHeader = page.locator('//*[@id="form"]/div/div/div/div/h2/b');
    this.mrRadioBtn = page.locator ('[id="id_gender1"]')
    this.nameField = page.locator('data-qa="name"')
    this.mrsRadioBtn = page.locator ('[id="id_gender1"]')
    this.emailField = page.locator ('[data-qa="email"]')
    this.passwordField = page.locator ('[data-qa="password"]')
    this.signupBtn = page.locator ('[data-qa="signup-button"]')
    this.dateField = page.locator ('[data-qa="days"]')
    this.monthField = page.locator ('[data-qa="months"]')
    this.yearField = page.locator ('[data-qa="years"]')
    this.newsletter = page.locator ('[id="newsletter"]')
    this.offers = page.locator ('[id="optin"]')
    this.firstName = page.locator ('[data-qa="first_name"]')
    this.lastName = page.locator ('[data-qa="last_name"]')
    this.company = page.locator ( '[data-qa="company"]')
    this.address = page.locator ( '[data-qa="address"]')
    this.address2 = page.locator ( '[data-qa="address2"]')
    this.country = page.locator ( '[data-qa="country"]')
    this.state =  page.locator ( '[data-qa="country"]')
    this.city =  page.locator ( '[data-qa="country"]')
    this.zipcode =  page.locator ( '[data-qa="zipcode"]')
    this.mobileNumber =  page.locator ( '[data-qa="mobile_number"]')
    this.createBtn = page.locator('[data-qa="create-account"]')
  }

  

  async SignUp(name,email,password,date,month,year) {
    await this.mrRadioBtn.click();
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.dateField.fill(date);
    await this.monthField.fill(month);
    await this.yearField.fill(year);
    await this.newsletter.click();
    await this.offers.click();

  }

  

 
}
