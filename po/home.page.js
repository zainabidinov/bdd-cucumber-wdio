const Base = require("./base");

class HomePage extends Base {
  get homePageLogoButton() {
    return $("a.css-me4kch");
  }

  get createNewBoardButton() {
    return $("div.board-tile.mod-add");
  }

  get boardTitleInputField() {
    return $(".nch-textfield__input");
  }

  get createBoardButton() {
    return $(".ijFumaLuInvBrL.bxgKMAm3lq5BpA");
  }

  get boardTitle() {
    return $("h1[data-testid='board-name-display']");
  }

  get headerSearchBar() {
    return $("input[data-testid='cross-product-search-input-skeleton']");
  }

  get headerSearchResult() {
    return $$(
      "//div[@class='css-1a9l0m2']//div[@class='css-18zgk80']//span"
    )[0];
  }

  get trelloPageLink() {
    return $("a[href*='appSwitcherLogin']");
  }

  get manageProfilePageLink() {
    return $("a[href*='manage-profile']");
  }

  get createWorkspaceButton() {
    return $("//button[contains(text(), 'Create a workspace')]");
  }

  get workspaceTitleInputField() {
    return $("input[data-testid='header-create-team-name-input']");
  }

  get worskpaceTypeDropdown() {
    return $("div.css-1de73az-indicatorContainer");
  }

  get workspaceTypeOptionAsOther() {
    return $("//div[contains(text(), 'Other')]");
  }

  get workspaceCreateButton() {
    return $("button.GIqaLrnyFRVYpt.bxgKMAm3lq5BpA");
  }

  get openBoardButton() {
    return $$("//div[contains(text(), 'Test Board')]")[0];
  }

  get addAListButton() {
    return $("button[data-testid='list-composer-button']");
  }

  get listTitleInputFields() {
    return $$("textarea[data-testid='list-name-textarea']");
  }

  get addListButton() {
    return $("button[data-testid='list-composer-add-list-button']");
  }

  get addedListsNames() {
    return $$("[data-testid='list-name']");
  }

  get addCardButton() {
    return $$("button[data-testid='list-add-card-button']")[0];
  }

  get cardTitleInputField() {
    return $$("textarea[data-testid='list-card-composer-textarea']")[0];
  }

  get addCardButtonInList() {
    return $("button[data-testid='list-card-composer-add-card-button']");
  }

  get cardTitles() {
    return $$("a[data-testid='card-name']");
  }

  get userFullNameInputFieldReadView() {
    return $(
      "//span[text()='Full name']/ancestor::label/following-sibling::div//div[@role='presentation']"
    );
  }

  get userFullNameInputFieldWriteView() {
    return $("input[name='inlineEdit']");
  }

  get userInfoConfirmButton() {
    return $("//button[contains(@class, 'css-1gydvim') and @type='submit']");
  }

  get workspaceSettingsPageLink() {
    return $(
      "//a[@class='boards-page-board-section-header-options-item']//span[contains(text(), 'Settings')]"
    );
  }

  get workspaceVisibilityChangeButton() {
    return $("button[data-testid='workspace-settings-visibility-button']");
  }

  get publicWorkspaceVisibilityOptionButton() {
    return $(
      "//span[@data-testid='visibility-name-public']/ancestor::div[@class='wfj__FaUUGQGeV']"
    );
  }

  get workspaceVisibilityStatus() {
    return $("//span[@class='E8WVztt_hleUQ2']");
  }

  async setNewListName(listName) {
    const fields = await this.listTitleInputFields;

    for (const field of fields) {
      const value = await field.getValue();
      if (value.trim() === "") {
        await field.setValue(listName);
        return;
      }
    }
  }

  async findElByName(elName, elements) {
    const items = await elements;
    return items.find(async (item) => {
      const text = await item.getText();
      return text.includes(elName);
    });
  }
}

module.exports = HomePage;
