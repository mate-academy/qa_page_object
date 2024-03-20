'use strict';
// Added classes
class Header {
  get logo() {
    return 'Conduit logo';
  }
};

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
    this.logo = this.header.logo;
  }

  clickOnLogo() {
    return `Click on the ${this.logo}`;
  }
};

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.slug = slug;
    this.url = `${url}${slug}`;
  };

  get commentButton() {
    return '[Publish comment] button';
  };

  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
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
