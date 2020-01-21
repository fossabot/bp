exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Puppeteer: {
      url: process.env.TEST_URL,
      show: true,
      chrome: {
        args: ["--no-sandbox"]
      }
    }
  },
  include: {
    I: "./steps_file.js"
  },
  bootstrap: null,
  mocha: {},
  name: "tests",
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
};