'use strict';

class Header {
  get logo() {
    // Returning a mock element for now
    return { element: 'Conduit logo' };
  }
}

class PageObject {
  constructor(url, header) {
    this.url = url;
    this.header = header;
  }

  // Placeholder method for future functionality
  clickOnLogo() {
    // Simulate clicking on the logo element
    return `Click on the ${this.header.logo.element}`;
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug, header) {
    super(url + slug, header);
  }

  get commentButton() {
    // Returning a mock element for now
    return { element: '[Publish comment] button' };
  }

  // Placeholder method for future functionality
  clickOnCommentButton() {
    // Simulate clicking on the comment button element
    return `Click on the ${this.commentButton.element}`;
  }

  assertPageOpened() {
    // Simulate checking if certain elements are present on the page
    return `The ${this.url} is opened`;
  }
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
