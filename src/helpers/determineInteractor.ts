import {container} from "codeceptjs";

export function determineInteractor() {
    const helpers = container.helpers();
    let helper;

    for (const helperName of supportedHelpers) {
        if (Object.keys(helpers).includes(helperName)) {
            helper = helpers[helperName];
        }
    }

    if (!helper) {
        throw new Error(`Next interactors values are available: \n${JSON.stringify(supportedHelpers, null, "\t")}`);
    }

    return helper;
}

const supportedHelpers = [
    "Playwright",
    "Puppeteer",
];
