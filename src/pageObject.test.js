'use strict';

const { Header, PageObject, ArticlePage } = require('./pageObject');

const logo = { element: 'Conduit logo' };
const url = 'http://test.com';
const slug = '/article';
const header = new Header();
const page = new PageObject(url, header);
const articlePage = new ArticlePage(url, slug, header);

describe('Header class', () => {
  it('should create an instance of Header', () => {
    expect(header).toBeInstanceOf(Header);
  });

  it('should contain a logo element', () => {
    expect(header.logo).toEqual(logo);
  });
});

describe('PageObject class', () => {
  it('should create an instance of PageObject', () => {
    expect(page).toBeInstanceOf(PageObject);
  });

  it('should contain a url property', () => {
    expect(page.url).toBe(url);
  });

  it('should contain a header element as an instance of Header', () => {
    expect(page.header).toBeInstanceOf(Header);
    expect(page.header.logo).toEqual(logo);
  });

  it('should contain a "clickOnLogo" method', () => {
    expect(page.clickOnLogo()).toBe(`Click on the ${page.header.logo.element}`);
  });
});

describe('ArticlePage class', () => {
  it('should create an instance of ArticlePage', () => {
    expect(articlePage).toBeInstanceOf(ArticlePage);
  });

  it('should extend the PageObject class', () => {
    expect(articlePage).toBeInstanceOf(PageObject);
    expect(articlePage.url).toBe(url + slug);
  });

  it('should contain a "url" property concatenated with slug', () => {
    expect(articlePage.url).toBe(url + slug);
  });

  it('should contain a "commentButton" property', () => {
    expect(articlePage.commentButton)
      .toEqual({ element: '[Publish comment] button' });
  });

  it('should contain a "clickOnCommentButton" method', () => {
    expect(articlePage.clickOnCommentButton()).toBe(`Click on the ${articlePage.commentButton.element}`);
  });

  it('should contain a "assertPageOpened" method', () => {
    expect(articlePage.assertPageOpened()).toBe(`The ${articlePage.url} is opened`);
  });
});
