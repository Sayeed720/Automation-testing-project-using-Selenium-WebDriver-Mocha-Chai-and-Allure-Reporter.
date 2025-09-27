import {By,Key,Browser, Builder }from "selenium-webdriver"
import { expect } from "chai";

  async function testQ1(){
   const driver = await new Builder().forBrowser(Browser.CHROME).build(); 
    await driver.get("https://www.saucedemo.com/");
     await driver.manage().window().maximize();
     await driver.sleep(2000);
    await driver.findElement(By.id("user-name")).sendKeys("locked_out_user");
    await driver.sleep(2000);
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.sleep(2000);
    await driver.findElement(By.id("login-button")).click();
    await driver.sleep(2000);
   
    const errorMsg = await driver.findElement(By.css("h3[data-test='error']")).getText();
    expect(errorMsg).to.equal("Epic sadface: Sorry, this user has been locked out.");
    
    await driver.sleep(2000);
   // await driver.quit();
    if (allure) {
        allure.createAttachment("Error Message", errorMsg, "text/plain");
      }
    } catch (err) {
      // ✅ Capture and attach screenshot on failure
      if (allure && driver) {
        const screenshot = await driver.takeScreenshot();
        allure.createAttachment(
          "Failure Screenshot",
          Buffer.from(screenshot, "base64"),
          "image/png"
        );
      }
      throw err; // Rethrow so the test still fails
    } finally {
      await driver.quit();
    
  
}
testQ1();
