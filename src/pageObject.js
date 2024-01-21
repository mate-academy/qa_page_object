'use strict';

const commentButton = '[Publish comment] button';
const logo = 'Conduit logo';

class Header {
  get logo() {
    return logo;
  };
};

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  };
  clickOnLogo() {
    return 'Click on the ' + logo;
  };
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.url = url + slug;
  };
  get commentButton() {
    return commentButton;
  };

  clickOnCommentButton() {
    return 'Click on the ' + commentButton;
  };
  assertPageOpened() {
    return `The ${this.url} is opened`;
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
