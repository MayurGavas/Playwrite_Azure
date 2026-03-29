import { test, expect } from '@playwright/test';

test("Feature file 1 : Scenario 1", async({page}) =>{

    await page.goto("https://selectorshub.com/")
    await expect(page).toHaveTitle("SelectorsHub- Free Productivity Booster Tools For Testers")

})