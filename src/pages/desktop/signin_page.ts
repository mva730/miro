const {I} = inject();

class SignInPage {

    readonly url = "https://miro.com/signup/";
    protected readonly nameField = "[id=name]";
    protected readonly emailField = "[id=email]";
    protected readonly passwordField = "[id=password]";
    protected readonly submitButton = "[class=signup__submit]";
    protected readonly termsCheckbox = "[id=signup-terms]";
    protected readonly subscribeCheckbox = "[id=signup-subscribe]";

    async signUp(name = "", email = "", password = "", subscription = 1): Promise<void> {
        await this.fillName(name);
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickTermsAgreement();
        if (subscription) await this.clickSubscribeAgreement();
        await this.clickSubmit();
    }

    async fillName(name: string): Promise<void> {
        await I.waitForText("Name");
        await I.fillField(this.nameField, name);
    }

    async fillEmail(email: string): Promise<void> {
        await I.waitForText("Name");
        await I.fillField(this.emailField, email);
    }

    async fillPassword(password: string): Promise<void> {
        await I.waitForText("Work email");
        await I.fillField(this.passwordField, password);
    }

    async clickSubmit(): Promise<void> {
        await I.waitForText("Get started now");
        await I.forceClick(this.submitButton);
    }

    async clickTermsAgreement(): Promise<void> {
        await I.waitForText("I agree to Miro");
        await I.forceClick(this.termsCheckbox);
    }

    async clickSubscribeAgreement(): Promise<void> {
        await I.waitForText("I agree to receive Miro news and updates.");
        await I.forceClick(this.subscribeCheckbox);
    }
}

export = new SignInPage();
