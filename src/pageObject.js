'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
}

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  // Placeholder method for future functionality
  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url + slug);
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  // Placeholder method for future functionality
  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
  }

  assertPageOpened() {
    return `The ${this.url} is opened`;
  }
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
