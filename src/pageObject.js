'use strict';

class Header {
  constructor(logo) {
    this.logo = 'Conduit logo';

    return logo;
  }
};

class PageObject {
  constructor(url, headerLogo) {
    this.url = url;
    this.header = new Header(headerLogo);
  }

  clickOnLogo() {
    return 'Click on the ' + this.header.logo;
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super();
    this.url = url + slug;
    this.commentButton = '[Publish comment] button';
  }
  clickOnCommentButton() {
    return 'Click on the ' + this.commentButton;
  }
  assertPageOpened() {
    return 'The ' + this.url + ' is opened';
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
