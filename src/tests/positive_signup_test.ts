Feature("User SignUp");

import * as assert from "assert";
import signInPage from "../pages/desktop/signin_page";

const {I} = inject();

// Hi everyone! Looks like Miro has an issue with "test.com" word inside the domain during signup
// Example: test.com
// THIS TEST WILL FAIL
Scenario("Test.com domain email test", async () => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Fill user data and submit");
    await signInPage.signUp("Testman", `${Date.now()}qwe123@test.com`, "12345678");

    console.log("Verify email");
    await I.waitForText("Check your email");
});

const correctData = new DataTable(["name", "email", "password", "subscription"]);
correctData.add(["Alberth Gor", `${Date.now()}someone@some1.com`, "199201jjs", 0]);
correctData.add(["Vyacheslav Milashov", `${Date.now()}sowqme2one@comp.net`, "2312kjhgasy6d7", 1]);
correctData.add(["mr X", `${Date.now()}djhfgsuy2@ya.li`, "aa1yyshh23g", 0]);
correctData.add(["IT maintainer", `${Date.now()}12300_w@aedf.com`, "0#$%^&*()2", 1]);
Data(correctData).Scenario("Users signup with/without subscription", async ({current}) => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Fill user data and submit");
    await signInPage.signUp("testuser", current.email, current.password, current.subscription);

    console.log("Verify email");
    await I.waitForText("Check your email");
    assert.ok((await I.grabCurrentUrl()).includes("email-confirm"), "URL verification");
});
