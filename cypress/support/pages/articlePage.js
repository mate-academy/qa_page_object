'use strict';

const PageObject = require('./PageObject');

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url + '/' + slug);
    this.slug = slug;
  }

  get commentButton() {
    return '[Publish comment] button';
  }

  clickOnCommentButton() {
    return 'Click on the ' + this.commentButton;
  }

  assertPageOpened() {
    return 'The ' + this.url + ' is opened';
  }
}

module.exports = ArticlePage;
