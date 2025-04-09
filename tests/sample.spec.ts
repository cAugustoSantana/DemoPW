const {test,expect} = require('@playwright/test')

import { HomePage } from '../pages/home.page';




test("Register User", async function({ page }) {

    const homePage = new HomePage(page);

    /** 1-Verify that home page is visible successfully */
    await homePage.verifyPageTitle();  
});