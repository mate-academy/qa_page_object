'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
};

class PageObject {
  constructor(url) {
    this._url = url;
  }

  get url() {
    return this._url;
  }

  get header() {
    return new Header();
  }

  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this._slug = slug;
  }

  get url() {
    return this._url + this._slug;
  }

  get commentButton() {
    return `[Publish comment] button`;
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
