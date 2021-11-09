import {determineInteractor} from "./determineInteractor";

class BaseHelper extends Helper {

    get interactor() {
        return determineInteractor();
    }

    get browser() {
        return this.interactor.browser;
    }

    async _beforeSuite(): Promise<void> {
        if (!this.browser || this.browser._connection._closed) {
            await this.interactor._startBrowser();
        }
    }

    async _after(): Promise<void> {
        if (this.interactor === process.env.PUPPETEER) {
            await this.interactor.openNewTab();
            await this.interactor.closeOtherTabs();
        }
    }

    async _afterSuite(): Promise<void> {
        if (this.interactor === process.env.PUPPETEER) {
            await this.interactor.clearCookie();
        }
    }

}

export =  BaseHelper;
