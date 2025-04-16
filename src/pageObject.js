'use strict';

class Header {
  constructor() {
    this._logo = 'Conduit logo'; // Changed to private property
  }

  get logo() {
    return this._logo; // Getter for logo
  }

  clickOnLogo() {
    return 'Clicking on logo';
  }

  clickOnSearch() {
    return 'Clicking on search';
  }

  clickOnMenu() {
    return 'Clicking on menu';
  }
};

class PageObject {
  constructor(url) {
    this.url = url; // Assign url to the property
    this.header = new Header(); // Create an instance of Header
  }

  clickOnLogo() {
    return 'Click on the ' + this.header.logo; // Use the logo from Header
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url); // Call the parent constructor
    this.url += slug; // Modify the URL by appending the slug
    this.title = 'Article Page';
  }

  get commentButton() {
    return '[Publish comment] button'; // Getter for commentButton
  }

  clickOnCommentButton() {
    return 'Click on the ' + this.commentButton; // Use the commentButton getter
  }

  assertPageOpened() {
    return 'The ' + this.url + ' is opened'; // Assert the page is opened
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
