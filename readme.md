# Page Object basics

**Read [the guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md) before start**

Let's implement 3 classes with inheritance.

## Header

- should contain getter property `logo` which return 'Conduit logo' string.

## PageObject

- constructor takes `url` and and assign it to `url` property
- constructor contains `header` property which is an instance of `Header` class
- should contain `clickOnLogo` method. The method should return a string 'Click on the' + `logo` from the `Header` class

## ArticlePage

- constructor taskes `url` and `slug`. Constructor should modify original `url` by adding `slug` at the end
- should contain getter property `commentButton` which return '[Publish comment] button' string
- should contain `clickOnCommentButton` method. The method should return a string 'Click on the' + `commentButton`
- should contain `assertPageOpened` method. The method should return a string 'The ' + `url` + 'is opened`
