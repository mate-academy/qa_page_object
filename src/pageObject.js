'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  };
};

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  };
  clickOnLogo() {
    return 'Click on the Conduit logo';
  };
};

class ArticlePage extends PageObject {
  get commentButton() {
    return '[Publish comment] button';
  };
  clickOnCommentButton() {
    return 'Click on the [Publish comment] button';
  };
  assertPageOpened() {
    return `The ${this.url} is opened`;
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
