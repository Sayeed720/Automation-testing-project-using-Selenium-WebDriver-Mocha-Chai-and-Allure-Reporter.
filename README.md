# Automation-testing-project-using-Selenium-WebDriver-Mocha-Chai-and-Allure-Reporter.
This project contains automated test scripts for the SwagLabs website (https://www.saucedemo.com/).  It includes tests for user login, shopping cart functionality, and purchase workflows for multiple user types.
## Test Scenarios

### Q1
- Login with `locked_out_user` and verify the error message.

### Q2
- Login with `standard_user`.
- Reset the App State.
- Add three items to the cart.
- Navigate to checkout and verify product name & total price.
- Complete purchase and verify success message.
- Reset App State and log out.

### Q3
- Login with `performance_glitch_user`.
- Reset App State.
- Filter products by name (Z to A) and select the first product.
- Navigate to checkout, verify product names and total price.
- Complete purchase and verify success message.
- Reset App State and log out.
Technologies Used
markdown
Copy code
## Technologies Used
- JavaScript (ES6)
- Selenium WebDriver
- Mocha & Chai
- Allure Reporter
- Node.js
## Installation commandline
- npm install
- npm in it
- npm i mocha
- npm i chai
- npm install selenium-webdriver 
- npm install -g allure-commandline
## Run Commandline
- npx mocha Q1.js --timeout 60000 --reporter mocha-allure-reporter
- npx mocha Q2.js --timeout 60000 --reporter mocha-allure-reporter
- npx mocha Q3.js --timeout 60000 --reporter mocha-allure-reporter
- npx mocha all.js --timeout 60000 --reporter mocha-allure-reporter
