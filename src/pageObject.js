'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
}

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return 'Click on the ' + this.header.logo; // dodałem brakującą spację
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(`${url}${slug}`); // łączymy bez dodatkowego slash
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    return 'Click on the ' + this.commentButton; // dodałem brakującą spację
  }

  assertPageOpened() {
    return 'The ' + this.url + ' is opened'; // dodałem brakującą spację
  }
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
