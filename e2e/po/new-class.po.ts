import { browser, element, by } from 'protractor';

export class NewClassPageObject {
  nameInputElement = element(by.id('idNewClassClassName-input'));
  startDateInputElement = element(by.id('idNewClassStartDate-input'));
  saveButtonElement = element(by.id('idNewClassSaveButton'));

  navigateTo() {
    return browser.get('/class');
  }

  validateIntegrityOfPage() {
    this.navigateTo();
    this.validateIntegrityOfNewClassComponent();
  }

  validateIntegrityOfNewClassComponent() {
    expect(this.nameInputElement.isDisplayed()).toEqual(true);
    expect(this.startDateInputElement.isDisplayed()).toEqual(true);
  }

  addNewClass(name, startDate) {
    this.nameInputElement.sendKeys(name);
    this.startDateInputElement.sendKeys(startDate);
    this.saveButtonElement.click();
  }
}
