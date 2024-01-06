'use strict';

const f = 'Conduit logo';
const y = '[Publish comment] button';

class Header {
  get logo() {
    return f;
  };
};

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  };
  clickOnLogo() {
    return 'Click on the ' + `${f}`;
  };
};

class ArticlePage extends PageObject {
  get commentButton() {
    return y;
  };
  clickOnCommentButton() {
    return 'Click on the ' + y;
  };
  assertPageOpened() {
    return 'The http://test.com is opened';
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
