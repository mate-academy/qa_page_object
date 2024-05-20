'use strict';

class Header {
  get logo() {
    return 'Conduit logo'; // Zwraca string zamiast selektora
  }
}

class PageObject {
  constructor(url) {
    this.url = url;
    this.header = new Header();
  }

  clickOnLogo() {
    return `Click on the ${this.header.logo}`; // Zwraca string zamiast wykonywać akcję
  }
}

class ArticlePage extends PageObject {
  constructor(url, slug) {
    super(url); // Wywołanie konstruktora klasy nadrzędnej
    this.url = url + slug;
  }

  get commentButton() {
    return '[Publish comment] button'; // Zwraca string zamiast selektora
  }

  clickOnCommentButton() {
    return `Click on the ${this.commentButton}`; // Zwraca string zamiast wykonywać akcję
  }

  assertPageOpened() {
    return `The ${this.url} is opened`; // Zwraca string zamiast używać console.log
  }
}

module.exports = {
  Header,
  PageObject,
  ArticlePage,
};
