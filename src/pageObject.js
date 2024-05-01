'use strict';

class Header {
  get logoText() {
    return 'Conduit logo';
  }
};

class PageObject {
  constructor(url) {
    if (typeof url !== 'string') {
      throw new Error('URL must be a string');
    }
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return 'Click on the ' + this.header.logoText;
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    if (typeof slug !== 'string') {
      throw new Error('Slug must be a string');
    }
    this.url += slug;
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    return 'Click on the ' + this.commentButton;
  }

  assertPageOpened() {
    return 'The ' + this.url + ' is opened';
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
