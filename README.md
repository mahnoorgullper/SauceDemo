# Sause Demo (Cypress Project)

## Description
This project contains end-to-end tests written using Cypress for [Sauce Demo](https://www.saucedemo.com/). 

## System Requirements
Before running this project, ensure that your system meets the following requirements:
- **Node.js**: Version 10.X.X
- **npm**: Node Package Manager (usually comes with Node.js installation)
- **chrome**: Version 121 or higher (For test runner)

## Installation
1. Clone this repository:
    ```bash
    git clone https://github.com/mahnoorgullper/SauceDemo.git
    ```
2. Navigate to the project directory
    ```bash
    cd SauceDemo
    ```
3. Run command to install dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the Cypress test runner in headless:
    ```bash
    npx cypress run
    ```
2. Start the Cypress test runner in window
   ```bash
    npx cypress open
    ```
   a. Click on a spec file to run the associated test suite.

## Folder Structure
- **cypress/**: Contains Cypress test files and configuration.
    - **e2e/**: Contains cypress spec files containing tests
    - **pageobjects/**: Page object model class
    - **reports/**: Directory for reports
    - **screenshots/**: Screen saved here
    - **support/**: Custom commands and utility functions.
- **cypress.config.js**: Cypress configuration file.
- **package.json**: Node.js project manifest file.

## Scripts
- **npm cypress open**: Open Cypress test runner.
- **npm cypress run**: Run Cypress tests headlessly.

