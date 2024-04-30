'use strict';

class Header {
  constructor(logo){
    this.logo = 'Conduit logo';
    return logo
  }

};

class PageObject {
  constructor(headerlogo, url){
    this.header = new Header(headerlogo);
    this.url = url;
  }
  clickOnLogo(){
    return 'Click on the' + this.headerlogo
  }

};

class ArticlePage extends PageObject {
  constructor(url, slug){
    super()
    this.url = url + slug
    this.commentButton = '[Publish comment] button'
  }
  clickOnTheCommentButton(){
    return 'Click on the' + this.commentButton
  }
  assertPageOpened(){
    return 'The' + this.url + 'is opened'
  }
};

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
