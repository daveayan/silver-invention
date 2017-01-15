import { browser, element, by } from 'protractor';

export class TeacherDashboardPage {
  navigateTo() {
    return browser.get('/teacher');
  }

  validateIntegrityOfPage() {
    this.navigateTo();
    this.validateIntegrityOfNewTeacherComponent();
    this.validateIntegrityOfListTeachersComponent();
  }

  validateIntegrityOfNewTeacherComponent() {
    let nameInputElement = element(by.id('idNewTeacherTeacherName'));
    let joinDateInputElement = element(by.id('idNewTeacherJoinDate'));
    let saveButtonElement = element(by.id('idNewTeacherSaveButton'));

    expect(nameInputElement.isDisplayed()).toEqual(true);
    expect(joinDateInputElement.isDisplayed()).toEqual(true);
  }

  validateIntegrityOfListTeachersComponent() {
  }
}
