// Header class
class Header {
  get logo() {
    return 'Conduit logo';
  }
}

// PageObject class
class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    // test expects: "Click on the Conduit logo"
    return 'Click on the ' + this.header.logo;
  }
}

// ArticlePage class
class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url);
    this.url = `${url}${slug}`;
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    // test expects: "Click on the [Publish comment] button"
    return 'Click on the ' + this.commentButton;
  }

  assertPageOpened() {
    // test expects: "The http://... is opened" (with space before is)
    return 'The ' + this.url + ' is opened';
  }
}

// Export classes for testing
module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
