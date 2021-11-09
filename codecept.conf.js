require("dotenv").config();

const puppeteerConfig = require("./configurations/puppeteer.config.js");
const playwrightConfig = require("./configurations/playwright.config.js");

const testsPath = process.env.TESTS_PATH;

const runnerSwitcher = () => {
    const helpers = {
        BaseHelper: {
            require: "./src/helpers/base_helper.ts",
        }
    };
    switch (process.env.RUNNER) {
        case "PLAYWRIGHT":
            return Object.assign({Playwright: playwrightConfig}, helpers);
        case "PUPPETEER":
            return Object.assign({Puppeteer: puppeteerConfig}, helpers);
        default:
            throw new Error("Couldn't determine the interactor, reason: \nUnknown runner was provided");
    }
};

exports.config = {
    output: "./output",
    tests: testsPath,
    helpers: runnerSwitcher(),
    bootstrap: null,
    name: "mirouitests",
    plugins: {
        screenshotOnFail: {
            enabled: false
        },
    },
    require: ["ts-node/register"],
};
