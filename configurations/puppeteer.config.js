const show = !JSON.parse(process.env.HEADLESS);
const waitForTimeout = parseInt(process.env.WAIT_FOR_TIMEOUT);
const getPageTimeout = parseInt(process.env.PAGE_LOAD_TIMEOUT);

module.exports = {
    show: show,
    waitForNavigation: "networkidle2",
    waitForTimeout: waitForTimeout,
    getPageTimeout: getPageTimeout,
    windowSize: "1000x2000",
    browser: "chrome",
    chrome: {
        args: ["--no-sandbox",
            "--window-size=1920,1000",
            "--disable-setuid-sandbox",
            "--disable-web-security",
            "--disable-features=site-per-process"],
        devtools: false,
    },
    manualStart: true,
    restart: false,
    keepCookies: true,
    keepBrowserState: false,
};
