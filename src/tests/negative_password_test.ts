Feature("SignUp validation errors");

import signInPage from "../pages/desktop/signin_page";

const {I} = inject();

let wrongPasswords = new DataTable(["pass"]);
wrongPasswords.add(["12312"]);
wrongPasswords.add(["QQQQQQ"]);
wrongPasswords.add(["@@@"]);
Data(wrongPasswords).Scenario("Wrong small password with others filled", async ({current}) => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Fill user data and submit");
    await signInPage.signUp("Testman", `${Date.now()}correct@mail.com`, current.pass);

    console.log("Verify password");
    await I.dontSee("Check your email");

    // No dot at the end of error message on UI (every other error has the dot at phrase end)
    await I.waitForText("Please use 8+ characters for secure password");
});

wrongPasswords = new DataTable(["pass"]);
wrongPasswords.add(["123456789098qwjhdgukhasgfuygi78g12378721g3o812giuksdhjagdkhjagsdjkhgasjkhdgasjkhgd765432"]);
wrongPasswords.add(["jhgjshgdhsagkjhfjhgjhg222222dgk234jhgjhgjhgjhgjh23e32jhgjhgjhgjhgjhg"]);
Data(wrongPasswords).Scenario("Wrong long password with others filled", async ({current}) => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Fill user data and submit");
    await signInPage.signUp("Testman", `${Date.now()}correct@mail.com`, current.pass);

    console.log("Verify password");
    await I.dontSee("Check your email");
    await I.waitForText("Sorry, your password cannot exceed 60 characters");
});
