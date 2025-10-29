import {test,expect} from "@playwright/test"



test("Verify Page Title", ({page})=>{
 
    page.goto("https://www.google.com");
    expect(page).toHaveTitle("Google");
})