import {By,Key,Browser, Builder }from "selenium-webdriver"
import { expect } from "chai";

async function testQ3(){
   const driver = await new Builder().forBrowser(Browser.CHROME).build(); 
    await driver.get("https://www.saucedemo.com/");
     await driver.manage().window().maximize();
        await driver.findElement(By.id("user-name")).sendKeys("performance_glitch_user");
        await driver.sleep(2000);
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.sleep(2000);
    await driver.findElement(By.id("login-button")).click();
    await driver.sleep(2000);

   
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("reset_sidebar_link")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("react-burger-cross-btn")).click();
    await driver.sleep(2000);

    let sortDropdown = await driver.findElement(By.className("product_sort_container"));
    await sortDropdown.sendKeys("Name (Z to A)");
    await driver.sleep(2000);
    
    
    let addBtn = await driver.findElement(By.css(".btn_inventory"));
    await addBtn.click();
    await driver.sleep(2000);

  
    await driver.findElement(By.className("shopping_cart_link")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("checkout")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("first-name")).sendKeys("Perf");
    await driver.sleep(2000);
    await driver.findElement(By.id("last-name")).sendKeys("Glitch");
    await driver.sleep(2000);
    await driver.findElement(By.id("postal-code")).sendKeys("67890");
    await driver.sleep(2000);
    await driver.findElement(By.id("continue")).click();

    
    let totalLabel = await driver.findElement(By.className("summary_total_label")).getText();
    expect(totalLabel).to.include("Total");
    await driver.sleep(2000);
    
   await driver.findElement(By.id("finish")).click();
    const successMsg = await driver.findElement(By.className("complete-header")).getText();
    expect(successMsg).to.equal("Thank you for your order!");
    await driver.sleep(2000);
    await driver.findElement(By.id("back-to-products")).click();
    await driver.sleep(5000);
    
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("reset_sidebar_link")).click();
    await driver.sleep(2000);
    await driver.findElement(By.id("logout_sidebar_link")).click();
    await driver.quit();
   
}
testQ3();