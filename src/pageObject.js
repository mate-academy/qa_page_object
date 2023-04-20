'use strict';

class Header {
  logo = 'Conduit logo';
};

class PageObject extends Header {
  header = new Header();
  constructor(url) {
    super();
    this.url = url;
  }

  clickOnLogo() {
    return `Click on the ${this.logo}`;
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.url = url + slug;
  }

  get commentButton() {
    return '[Publish comment] button';
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
