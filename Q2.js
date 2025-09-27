import {By,Key,Browser, Builder }from "selenium-webdriver"
import { expect } from "chai";

async function testQ2(){
   const driver = await new Builder().forBrowser(Browser.CHROME).build(); 
     await driver.manage().window().maximize();
    await driver.get("https://www.saucedemo.com/");
     await driver.sleep(5000);
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
     await driver.sleep(5000);
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
     await driver.sleep(5000);
    await driver.findElement(By.id("login-button")).click();

    
    await driver.findElement(By.id("react-burger-menu-btn")).click();
     await driver.sleep(5000);
    await driver.findElement(By.id("reset_sidebar_link")).click();
     await driver.sleep(5000);
    await driver.findElement(By.id("react-burger-cross-btn")).click();
     await driver.sleep(5000);

    
     let addButtons = await driver.findElements(By.css(".btn_inventory"));
    for (let i = 0; i < 3; i++) {
      await addButtons[i].click();
    }
   

    
    await driver.findElement(By.className("shopping_cart_link")).click();
    await driver.sleep(5000);
    await driver.findElement(By.id("checkout")).click();
    await driver.sleep(5000);
    await driver.findElement(By.id("first-name")).sendKeys("Sayeed");
    await driver.sleep(5000);
    await driver.findElement(By.id("last-name")).sendKeys("Tushar");
    await driver.sleep(5000);
    await driver.findElement(By.id("postal-code")).sendKeys("12345");
    await driver.sleep(5000);
    await driver.findElement(By.id("continue")).click();
    await driver.sleep(5000);

    
    let totalLabel = await driver.findElement(By.className("summary_total_label")).getText();
    expect(totalLabel).to.include("Total");

     
    await driver.findElement(By.id("finish")).click();
    const successMsg = await driver.findElement(By.className("complete-header")).getText();
    expect(successMsg).to.equal("Thank you for your order!");
    await driver.findElement(By.id("back-to-products")).click();
    await driver.sleep(5000);
    n
    await driver.findElement(By.id("react-burger-menu-btn")).click();
    await driver.sleep(5000);
    await driver.findElement(By.id("reset_sidebar_link")).click();
    await driver.sleep(5000);
    await driver.findElement(By.id("logout_sidebar_link")).click();
    await driver.sleep(5000);
   await driver.quit();
}
testQ2();
