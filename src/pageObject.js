'use strict';

class Header {
 get logo() {
  return "Conduit logo"
 }
};

class PageObject extends Header {
  constructor(url){
  super(logo);
  this.url = url;
  this.header = Header();
  }

  clickOnLogo() {
    return `Click on the ${this.logo}`
  }
};

class ArticlePage extends PageObject {
  constructor(url,slug){
    PageObject.url = url;
    this.slug = slug
  }

  get commentButton() {
    return `${this.url} + ${this.slug}`;
  }

  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`;
  }
  assertPageOpened() {
    return `The ${this.url} is opened`;
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
