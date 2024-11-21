'use strict';

class Header {
  constructor(header) {
    this.header = header;
  }

  get logo() {
    return `Conduit logo`;
  }
};

class PageObject {
  constructor(url, header) {
    this.header = new Header(header);
    this.url = url;
  }

  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.url = url + slug;
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
