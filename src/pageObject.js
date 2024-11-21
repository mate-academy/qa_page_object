'use strict';

class Header {
  get logo() {
    return 'Conduit logo';
  }
};

class PageObject {
  constructor(url = 'https', header) {
    this.url = url;
    this.header = new Header(header);
  }
  clickOnLogo() {
    return 'Click on the ' + this.header.logo;
  }
};

class ArticlePage extends PageObject {
  constructor(slug) {
    super();
    this.url = this.url + slug;
  };
  get commentButton() {
    return '[Publish comment] button';
  }
  clickOnCommentButton() {
    return 'Click on the ' + this.commentButton;
  };
  assertPageOpened() {
    return 'The ' + this.url + ' is opened';
  }
};

// const page = new PageObject('https:sfsdf/', 'someheader');
// const article = new ArticlePage('slug');

// console.log(article);
// console.log(article.asserPageOpened());

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
