'use strict';

class Header {
  logo() {
    return 'Conduit logo';
  }
};

class PageObject {
  constructor(url, slug) {
    this.url = url + slug;
    this.header = new Header();
  }

  visit() {
    cy.visit(this.url); 
  }

  clickOnLogo() {
    return `Click on the ${this.header.logo()}`;
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url, slug);
  }

  commentButton() {
    return cy.get('[Publish comment] button');
  }

  clickOnCommentButton() {
    return `Click on the ${this.commentButton()}`;
  }

  assertPageOpened() {
    return `The ${url} is opened`;
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
