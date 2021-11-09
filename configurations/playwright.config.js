const show = !JSON.parse(process.env.HEADLESS);
const waitForTimeout = parseInt(process.env.WAIT_FOR_TIMEOUT);
const getPageTimeout = parseInt(process.env.PAGE_LOAD_TIMEOUT);

module.exports = {
    show: show,
    waitForNavigation: "domcontentloaded",
    waitForTimeout: waitForTimeout,
    getPageTimeout: getPageTimeout,
    windowSize: "1000x2000",
    browser: "chromium",
    chromium: {
        args: ["--no-sandbox",
            "--window-size=1920,1000",
            "--disable-setuid-sandbox",
            "--disable-web-security"],
        devtools: false,
    },
    manualStart: true,
    restart: false,
    keepCookies: true,
    keepBrowserState: false
};
