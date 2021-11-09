Feature("SignUp validation errors");

import signInPage from "../pages/desktop/signin_page";

const {I} = inject();

Scenario("All fields are empty", async () => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Submit empty fields");
    await signInPage.clickSubmit();

    console.log("Verify error messages");
    await I.waitForText("Please enter your name.");
    await I.waitForText("Please enter your email address.");
    await I.waitForText("Please enter your password.");
    await I.waitForText("Please agree with the Terms to sign up.");
});
