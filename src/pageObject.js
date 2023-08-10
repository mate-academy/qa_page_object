'use strict';

class Header {
  constructor() {
    this.logo = 'Conduit logo';
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
  constructor(url, slug) {
    super(url);
    this.url = url + '/' + slug;
    this._commentButton = '[Publish comment] button';
  }

  get commentButton() {
    return this._commentButton;
  }

  clickOnCommentButton() {
    return 'Click on the ' + this._commentButton;
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
