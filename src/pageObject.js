'use strict';

class Header {
  /**
   * Getter property for the logo string.
   * @returns {string} The logo string.
   */
  get logo() {
    return 'Conduit logo';
  }
}

class PageObject {
  /**
   * Constructor for the PageObject class.
   * @param {string} url - The URL of the page.
   */
  constructor(url) {
    this.url = url;
    this.header = new Header();
    // Initialize header as an instance of Header class
  }

  /**
   * Method to simulate clicking on the logo.
   * @returns {string} A string indicating the click action.
   */
  clickOnLogo() {
    return 'Click on the ' + this.header.logo;
  }
}

class ArticlePage extends PageObject {
  /**
   * Constructor for the ArticlePage class.
   * @param {string} url - The base URL of the article page.
   * @param {string} slug - The slug to be appended to the URL.
   */
  constructor(url, slug) {
    // Call the parent constructor with the modified URL
    super(url + slug);
  }

  /**
   * Getter property for the comment button string.
   * @returns {string} The comment button string.
   */
  get commentButton() {
    return '[Publish comment] button';
  }

  /**
   * Method to simulate clicking on the comment button.
   * @returns {string} A string indicating the click action.
   */
  clickOnCommentButton() {
    return 'Click on the ' + this.commentButton;
  }

  /**
   * Method to assert that the page is opened.
   * @returns {string} A string indicating the page opening.
   */
  assertPageOpened() {
    return 'The ' + this.url + ' is opened';
  }
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
