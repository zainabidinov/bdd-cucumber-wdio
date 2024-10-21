const Base = require("./base");

class LoginPage extends Base {
  get emailInput() {
    return $("input#username.css-1kxou5n");
  }

  get passwordInput() {
    return $("input#password.css-1kxou5n");
  }

  get continueButton() {
    return $("//button[@id='login-submit']//span[@class='css-178ag6o']");
  }

  get loginButton() {
    return $("button#login-submit.css-t8mx7z");
  }

  get twoFactorAuthSkipButton() {
    return $("//button//span[text()='Continue without two-step verification']");
  }

  async login(email, password) {
    await this.emailInput.waitForDisplayed({ timeout: 25000 });
    await this.emailInput.setValue(email);
    await this.continueButton.click();
    await this.passwordInput.waitForDisplayed();
    await this.passwordInput.setValue(password);
  }
}

module.exports = LoginPage;
