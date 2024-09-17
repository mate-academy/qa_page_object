"use strict";

const { Header, PageObject, ArticlePage } = require("./pageObject");

const logo = "Conduit logo";
const url = "http://test.com";
const slug = "/article";
const header = new Header();
const page = new PageObject(url);
const articlePage = new ArticlePage(url, slug);

describe("Header class", () => {
  it("should create an instance of Header", () => {
    expect(header).toBeInstanceOf(Header);
  });

  it("should contain a logo element", () => {
    expect(header.logo).toBe(logo);
  });
});

describe("PageObject class", () => {
  it("should create an instance of PageObject", () => {
    expect(page).toBeInstanceOf(PageObject);
  });

  it("should contain a url property", () => {
    expect(page.url).toBe(url);
  });

  it("should contain a header element as an instanse of Header", () => {
    expect(page.header).toBeInstanceOf(Header);
  });

  it('should contain a "clickOnLogo" method', () => {
    expect(page.clickOnLogo()).toBe(`Click on the ${page.header.logo}`);
  });
});

describe("ArticlePage class", () => {
  it("should create an instance of ArticlePage", () => {
    expect(articlePage).toBeInstanceOf(ArticlePage);
  });

  it("should extend the PageObject class", () => {
    expect(articlePage).toBeInstanceOf(PageObject);

    expect(articlePage.url).toBe(url + slug);
  });

  it('should contain a "url" property contatenated with slug', () => {
    expect(articlePage.url).toBe(url + slug);
  });

  it('should contain a "commentButton" property', () => {
    expect(articlePage.commentButton).toBe(`[Publish comment] button`);
  });

  it('should contain a "clickOnCommentButton" method', () => {
    expect(articlePage.clickOnCommentButton()).toBe(
      `Click on the ${articlePage.commentButton}`
    );
  });

  it('should contain a "assertPageOpened" method', () => {
    expect(articlePage.assertPageOpened()).toBe(
      `The ${articlePage.url} is opened`
    );
  });
});
