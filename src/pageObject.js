'use strict';

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
    return 'Click on the ' + this.header.logo;
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url); // Викликаємо конструктор батьківського класу
    this.url = `${url}/${slug}`; // Додаємо slug до URL
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
