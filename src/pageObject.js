'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
}

class PageObject {
  constructor(url) {
    this.url = url;
  }

  visit() {
    cy.visit(this.url); 
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url + slug);
  }

  get commentButton() {
    return cy.get('.publish-comment-button'); 
  }

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
