'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  };
};

class PageObject {
  constructor(url) {
    this.url = 'http://test.com';
    this.header = new Header('Conduit logo');
  };

  get logo() {
    return this.header.logo;
  }
  clickOnLogo() {
    return `Click on the ${this.logo}`;
  };
};

class ArticlePage extends PageObject {
  constructor(url, slag) {
    super(url);
    this.url = url + `${slag}`;
  };

  get commentButton() {
    return '[Publish comment] button';
  };

  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
  };

  assertPageOpened() {
    return `The ${this.url} is opened`;
  };
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
