'use strict';

class Header {
  constructor() {
    this.logo = 'Conduit logo';
  };
};

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  };
  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  };
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.url = url + slug;
    this.commentButton = '[Publish comment] button';
  };

  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
  }

  assertPageOpened() {
    return `The ${this.url} is opened`;
  };
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
