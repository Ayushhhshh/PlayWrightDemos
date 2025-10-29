import {test,expect} from "@playwright/test"
import { title } from "process";


test("Verify Page URL",async  ({page})=>{
 
    await page.goto("https://www.google.com");
    
    let URL : string = await page.url();
    console.log("URL is",URL);
    
    await expect(page).toHaveURL(URL);
})