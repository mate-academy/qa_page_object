'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }

  clickOnLogo() {
    return 'Click on the ' + this.logo;
  }
}


class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }
}

class ArticlePage {
  constructor(url, slug) {
    this.url = url + '/' + slug;
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
