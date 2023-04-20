'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
};

class PageObject extends Header {
  constructor(url) {
    super();
    this.url = url;
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
    this.slug = slug;
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
