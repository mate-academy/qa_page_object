'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
};

class PageObject {
  constructor(url, header) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  }
};

class ArticlePage extends PageObject {
  get commentButton() {
    return '[Publish comment] button';
  }
  constructor(url, slug, newUrl) {
    super(url);
    this.url = url + slug;
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
