// Header class with a getter property for logo
class Header {
  get logo() {
    return 'Conduit logo';
  }
}

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url); // Calls the constructor of PageObject
    this.url = url + slug; // Modify the URL by adding the slug
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
  }

  assertPageOpened() {
    return `The ${this.url} is opened`;
  }
}

// Export the classes to use in your tests
module.exports = { Header, PageObject, ArticlePage };
