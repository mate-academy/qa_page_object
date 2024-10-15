'use strict';

class Header {
  constructor(logo = 'Conduit logo') {
    this.logo = logo;
  }

  getLogo() {
    return this.logo;
  }
}

class PageObject {
  constructor(url, header = new Header()) {
    this.url = url;
    this.header = header;
  }

  clickOnLogo() {
    return `Click on the ${this.header.getLogo()}`;
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug, header = new Header()) {
    super(url, header);
    this.fullUrl = `${url}${slug}`;
  }

  getCommentButtonLabel() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    return `Click on the ${this.getCommentButtonLabel()}`;
  }

  assertPageOpened() {
    return `The ${this.fullUrl} is opened`;
  }
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
