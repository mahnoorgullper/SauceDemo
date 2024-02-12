const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  chromeWebSecurity: false,

  reporter: "saucedemo",
  reporterOptions: {
    reportDir: "cypress/reports/mocha",
    overwrite: false,
    html: true,
    json: false,
  },
});
