Feature("SignUp validation errors");

import signInPage from "../pages/desktop/signin_page";

const {I} = inject();

const wrongEmails = new DataTable(["email"]);
wrongEmails.add(["12312#@$%^&*.qw"]);
wrongEmails.add(["QQQQQQQQ.er"]);
wrongEmails.add(["@@@"]);
wrongEmails.add(["123456789098765432"]);
Data(wrongEmails).Scenario("Wrong email with others filled", async ({current}) => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Fill user data and submit");
    await signInPage.signUp("Testman", current.email, "1234a72s");

    console.log("Verify email");
    await I.dontSee("Check your email");
    await I.waitForText("The email you entered is incorrect.");
});

Scenario("Empty email with others filled", async () => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Fill user data and submit");
    await signInPage.signUp("Testman", "", "1awde5678");

    console.log("Verify email");
    await I.dontSee("Check your email");
    await I.waitForText("Please enter your email address.");
});

const email = `${Date.now()}te5st@company.com`;
const duplicateEmails = new DataTable(["isDuplicate", "email"]);
duplicateEmails.add([0, email]);
duplicateEmails.add([1, email]);
Data(duplicateEmails).Scenario("Duplicate users test", async ({current}) => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Fill user data and submit");
    await signInPage.signUp("Testman", current.email, "12345678");

    console.log("Verify email");
    if (current.isDuplicate) {
        await I.waitForText("Sorry, this email is already registered", 10);
    } else {
        await I.waitForText("Check your email", 10);
    }
});
