import {test,expect} from "@playwright/test"
import { title } from "process";



test("Verify Page Title",async  ({page})=>{
 
    await page.goto("https://www.google.com");
    
    let title : string = await page.title();
    console.log("Title is",title);
    
    await expect(page).toHaveTitle("Google");
})

test("Verify Page URL",async  ({page})=>{
 
    await page.goto("https://www.google.com");
    
    let URL : string = await page.url();
    console.log("URL is",URL);
    
    await expect(page).toHaveURL(URL);
})