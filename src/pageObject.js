'use strict';

class Header {
  constructor() {
    this._logo = 'Conduit logo';
  }

  get logo() {
    return this._logo;
  }
};

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return 'Click on the ' + this.header.logo;
  }
};

class ArticlePage extends PageObject {
  super(url, slug) {
    this.url = url + slug;
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
