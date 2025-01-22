const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1200,
    viewportHeight: 1500,
    baseUrl: "http://localhost:5500/cypress/",
    videoCompression: 0,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
