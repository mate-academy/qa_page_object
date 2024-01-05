'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
};

class PageObject {
  constructor(url, header) {
    this.url = 'http://test.com';
  }
  clickOnLogo() {
    console.log(`Click on the ${this.logo}`);
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.newUrl = this.url + slug;
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
