import {test,expect} from "@playwright/test"
import { title } from "process";


test("Verify Page Title",async  ({page})=>{
 
    await page.goto("https://www.youtube.com/");
    
    let title : string = await page.title();
    console.log("Title is",title);
    
    await expect(page).toHaveTitle("Youtube");
})