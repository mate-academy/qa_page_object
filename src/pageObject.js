/* eslint-disable no-this-before-super */
/* eslint-disable no-useless-constructor */
/* eslint-disable indent */
/* eslint-disable no-undef */
'use strict';

class Header {
  constructor() {
    }
  get logo() {
    return `Conduit logo`;
  }
};

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }
  clickOnLogo() {
    return `Click on the ${this.header.logo}`;
  }
  assertPageOpened() {
    return `The ${this.url} is opened`;
}
};
class ArticlePage extends PageObject {
constructor(url, slug) {
  super(url + '/' + slug);

    this.slug = slug;
}

get commentButton() {
    return '[Publish comment] button';
}

clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
}
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
