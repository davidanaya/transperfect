import { browser, by, element } from 'protractor';

export class TransperfectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nav')).getText();
  }
}
