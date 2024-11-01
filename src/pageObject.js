'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
}

class PageObject {
  constructor(url, header = new Header()) {
    this.header = header;
    this.url = url;
  }
  clickOnLogo() {
    return 'Click on the ' + this.header.logo;
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super();
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
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
