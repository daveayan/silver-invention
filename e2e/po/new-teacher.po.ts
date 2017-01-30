import { browser, element, by } from 'protractor';

export class NewTeacherPageObject {
  nameInputElement = element(by.id('idNewTeacherTeacherName-input'));
  joinDateInputElement = element(by.id('idNewTeacherJoinDate-input'));
  saveButtonElement = element(by.id('idNewTeacherSaveButton'));

  navigateTo() {
    return browser.get('/teacher');
  }

  validateIntegrityOfPage() {
    this.navigateTo();
    this.validateIntegrityOfNewTeacherComponent();
  }

  validateIntegrityOfNewTeacherComponent() {
    expect(this.nameInputElement.isDisplayed()).toEqual(true);
    expect(this.joinDateInputElement.isDisplayed()).toEqual(true);
  }

  addTeacher(name, joinDate) {
    this.nameInputElement.sendKeys(name);
    this.joinDateInputElement.sendKeys(joinDate);
    this.saveButtonElement.click();
  }
}
