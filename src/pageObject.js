'use strict';

class Header {
  get logo() {
    return `Conduit logo`;
  };
};

class PageObject {
  constructor(urlCons) {
    this.header = new Header();
    this.url = urlCons;
  };

  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  };
};

class ArticlePage extends PageObject {
  constructor(urlCons, slugCons) {
    super(urlCons);
    this.url += slugCons;
  }
  get commentButton() {
    return `[Publish comment] button`;
  };

  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
  };

  assertPageOpened() {
    return `The ${this.url} is opened`;
  };
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
