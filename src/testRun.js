import { ArticlePage } from './pageObjects.js';

const page = new ArticlePage('https://conduit.com/article/', 'cool-article');

console.log(page.clickOnLogo()); // Очікуємо: Click on the Conduit logo
console.log(page.clickOnCommentButton()); // Очікуємо: Click on the [Publish comment] button
console.log(page.assertPageOpened()); // Очікуємо: The https://conduit.com/article/cool-article is opened

