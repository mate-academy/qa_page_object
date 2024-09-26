'use strict';

class Header {
  get logo() {
    return `Conduit logo`;
  }
};

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  };

  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.url += slug;
  }

  get commentButton() {
    return `[Publish comment] button`;
  }

  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
  }

  assertPageOpened() {
    return `The ${this.url} is opened`;
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
