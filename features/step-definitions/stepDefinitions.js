const { Given, When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../../po/login.page");
const HomePage = require("../../po/home.page");

const loginPage = new LoginPage();
const homePage = new HomePage();

Given("I am on the Trello login page", async () => {
  await loginPage.open("https://id.atlassian.com/login");
});

When("I enter my email address and password", async () => {
  await loginPage.login("wavenomad47@gmail.com", "1234qwer1234$");
});

When('I click the "Log in" button', async () => {
  await loginPage.loginButton.click();
  const isTwoFASkipVisible = await loginPage.twoFactorAuthSkipButton
    .isDisplayed()
    .catch(() => false);
  if (isTwoFASkipVisible) {
    await loginPage.twoFactorAuthSkipButton.click();
  }
});

Then("I should be redirected to the home page", async () => {
  await homePage.homePageLogoButton.waitForDisplayed({ timeout: 20000 });
  await homePage.homePageLogoButton.click();
});

Given("I am logged into my account", async () => {
  await loginPage.open("https://id.atlassian.com/login");
  await loginPage.login("wavenomad47@gmail.com", "1234qwer1234$");
  await loginPage.loginButton.click();
  const isTwoFASkipVisible = await loginPage.twoFactorAuthSkipButton
    .isDisplayed()
    .catch(() => false);
  if (isTwoFASkipVisible) {
    await loginPage.twoFactorAuthSkipButton.click();
  }
});

When("I click on the 'Create new board' button", async () => {
  await homePage.trelloPageLink.waitForDisplayed({ timeout: 35000 });
  await homePage.trelloPageLink.click();
  await homePage.createNewBoardButton.waitForDisplayed({ timeout: 30000 });
  await homePage.createNewBoardButton.click();
});

When("I enter 'Test Board' as the board title", async () => {
  await homePage.boardTitleInputField.setValue("Test Board");
});

When("I click the 'Create' button", async () => {
  await homePage.createBoardButton.click();
});

Then("a new board named 'Test Board' should be created", async () => {
  await homePage.boardTitle.waitForDisplayed({ timeout: 30000 });
  await expect(homePage.boardTitle).toHaveText("Test Board");
});

When("I am on the 'Test Board' board", async () => {
  await homePage.trelloPageLink.waitForDisplayed({ timeout: 35000 });
  await homePage.trelloPageLink.click();
  await homePage.openBoardButton.waitForDisplayed();
  await homePage.openBoardButton.click();
});

When("I click the 'Add a list' button", async () => {
  await homePage.addAListButton.click();
});

When("I enter 'To Do' as the list name", async () => {
  await homePage.setNewListName("To Do");
});

When("I click the 'Add List' button", async () => {
  await homePage.addListButton.click();
});

Then(
  "a new list named 'To Do' should be added to the 'Test Board' board",
  async () => {
    const list = await homePage.findElByName("To Do", homePage.addedListsNames);
    await expect(list).toHaveText("To Do");
  }
);
Given("I view the 'To Do' list on the 'Test Board' board", async () => {
  await homePage.trelloPageLink.waitForDisplayed({ timeout: 35000 });
  await homePage.trelloPageLink.click();
  await homePage.openBoardButton.waitForDisplayed();
  await homePage.openBoardButton.click();
});

When("I click on the 'Add a card' button", async () => {
  await homePage.addCardButton.click();
});

When("I enter 'Shopping Cart Feature' as the card title", async () => {
  await homePage.cardTitleInputField.setValue("Shopping Cart Feature");
});

When("I click the 'Add Card' button", async () => {
  await homePage.addCardButtonInList.click();
});

Then(
  "a new card named 'Shopping Cart Feature' should be added to the 'To Do' list",
  async () => {
    const card = await homePage.findElByName(
      "Shopping Cart Feature",
      homePage.cardTitles
    );
    await expect(card).toHaveText("Shopping Cart Feature");
  }
);

When("I navigate to my profile management page", async () => {
  await homePage.manageProfilePageLink.waitForDisplayed({ timeout: 35000 });
  await homePage.manageProfilePageLink.click();
});

When("I change my full name to 'John Smith'", async () => {
  await homePage.userFullNameInputFieldReadView.waitForDisplayed();
  await homePage.userFullNameInputFieldReadView.click();
  await homePage.userFullNameInputFieldWriteView.isFocused();
  await homePage.userFullNameInputFieldWriteView.setValue("John Smith");
});

When("I click on 'Save' button", async () => {
  await homePage.userInfoConfirmButton.waitForDisplayed();
  await homePage.userInfoConfirmButton.click();
});

Then("my profile should be updated with the new full name", async () => {
  await expect(homePage.userFullNameInputFieldReadView).toHaveText(
    "John Smith"
  );
});

When("I am on 'Trello Workspace' page", async () => {
  await homePage.trelloPageLink.waitForDisplayed({ timeout: 35000 });
  await homePage.trelloPageLink.click();
  await homePage.workspaceSettingsPageLink.waitForDisplayed();
  await homePage.workspaceSettingsPageLink.click();
});

When("I click on 'Change' button", async () => {
  await homePage.workspaceVisibilityChangeButton.waitForDisplayed();
  await homePage.workspaceVisibilityChangeButton.click();
});

When(
  "I click on 'Public' button within the workspace visibility options",
  async () => {
    await homePage.publicWorkspaceVisibilityOptionButton.waitForDisplayed();
    await homePage.publicWorkspaceVisibilityOptionButton.click();
  }
);

Then(
  "the visibility of 'My Workspace' should be changed to 'Public'",
  async () => {
    await expect(homePage.workspaceVisibilityStatus).toHaveText("Public");
  }
);

When("I enter 'Test Board' in the search bar", async () => {
  await homePage.trelloPageLink.waitForDisplayed({ timeout: 35000 });
  await homePage.trelloPageLink.click();
  await homePage.headerSearchBar.waitForDisplayed();
  await homePage.headerSearchBar.setValue("Test Board");
});

Then("the board 'Test Board' should appear in the search results", async () => {
  const searchResult = await homePage.headerSearchResult;
  await expect(searchResult).toHaveText("Test Board");
});
