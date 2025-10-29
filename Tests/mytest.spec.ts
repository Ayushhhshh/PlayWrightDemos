import {test,expect} from "@playwright/test"
import { title } from "process";



test("Verify Page Title",async  ({page})=>{
 
    await page.goto("https://www.google.com");
    
    let title : string = await page.title();
   console.log("Title is",title);
    
    expect(page).toHaveTitle("Google");
}) 