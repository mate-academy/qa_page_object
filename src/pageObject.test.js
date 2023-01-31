'use strict';

const { Header, PageObject, ArticlePage } = require('./pageObject');

describe('Header class', () => {
  it('should create an instance of Header', () => {
    const header = new Header();

    expect(header)
      .toBeInstanceOf(Header);
  });

  it('should contain a logo element', () => {
    const header = new Header();

    expect(header.logo)
      .toBe('Conduit logo');
  });
});

describe('PageObject class', () => {
  it('should create an instance of PageObject', () => {
    const page = new PageObject('http://test.com');

    expect(page)
      .toBeInstanceOf(PageObject);
  });

  it('should contain a url property', () => {
    const page = new PageObject('http://test.com');

    expect(page.url)
      .toBe('http://test.com');
  });

  it('should contain a header element as an instanse of Header', () => {
    const page = new PageObject('http://test.com');

    expect(page.header)
      .toBeInstanceOf(Header);
  });

  it('should contain a "clickOnLogo" method', () => {
    const page = new PageObject('http://test.com');

    expect(page.clickOnLogo())
      .toBe(`Click on the ${page.header.logo}`);
  });
});

describe('ArticlePage class', () => {
  it('should create an instance of ArticlePage', () => {
    const page = new ArticlePage('http://test.com', '/test-slug');

    expect(page)
      .toBeInstanceOf(ArticlePage);
  });

  it('should extend the PageObject class', () => {
    const page = new ArticlePage('http://test.com', '/test-slug');

    expect(page)
      .toBeInstanceOf(PageObject);
  });

  it('should contain a "commentButton" property', () => {
    const page = new ArticlePage('http://test.com', '/test');

    expect(page.commentButton)
      .toBe(`[Publish comment] button`);
  });

  it('should contain a "clickOnCommentButton" method', () => {
    const page = new ArticlePage('http://test.com', '/test');

    expect(page.clickOnCommentButton())
      .toBe(`Click on ${page.commentButton}`);
  });

  it('should contain a "assertPageOpened" method', () => {
    const page = new ArticlePage('http://test.com', '/test');

    expect(page.assertPageOpened())
      .toBe(`The ${page.url} is opened`);
  });
});
