'use strict';

class Header {
  logo = 'Conduit logo';
}

class PageObject {
  url = 'http://test.com';

  header = new Header();

  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  }
}

class ArticlePage extends PageObject {
  url = 'http://test.com/article';
  commentButton = '[Publish comment] button';
  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
  }
  assertPageOpened() {
    return `The ${this.url} is opened`;
  }
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
