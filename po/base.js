class Base {
  async open(path) {
    await browser.url(path);
  }
}

module.exports = Base;
