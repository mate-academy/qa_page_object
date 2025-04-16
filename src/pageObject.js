'use strict';

class Header {
  constructor() {
    this._logo = 'Conduit logo';
  }

  get logo() {
    return this._logo;
  }

  clickOnLogo() {
    return 'Clicking on logo';
  }

  clickOnSearch() {
    return 'Clicking on search';
  }

  clickOnMenu() {
    return 'Clicking on menu';
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
    this.url += slug;
    this.title = 'Article Page';
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
