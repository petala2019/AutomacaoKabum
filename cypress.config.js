const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tvd226',
  env: {
    email: "testeskabum26@gmail.com",
    senha: "teste@123",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
