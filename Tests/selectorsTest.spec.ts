import { test, expect, Locator } from "@playwright/test";

test("Verify Image", async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/");
    const img:Locator= page.getByAltText("nopCommerce demo store")
    await expect(img).toBeVisible();
});