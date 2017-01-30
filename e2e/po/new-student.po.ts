import { browser, element, by } from 'protractor';

export class NewStudentPageObject {
  nameInputElement = element(by.id('idNewStudentStudentName-input'));
  gradeLevelInputElement = element(by.id('idNewStudentGradeLevel-input'));
  saveButtonElement = element(by.id('idNewStudentSaveButton'));

  navigateTo() {
    return browser.get('/student');
  }

  validateIntegrityOfPage() {
    this.navigateTo();
    this.validateIntegrityOfNewStudentComponent();
  }

  validateIntegrityOfNewStudentComponent() {
    expect(this.nameInputElement.isDisplayed()).toEqual(true);
    expect(this.gradeLevelInputElement.isDisplayed()).toEqual(true);
  }

  addStudent(name, gradeLevel) {
    this.nameInputElement.sendKeys(name);
    this.gradeLevelInputElement.sendKeys(gradeLevel);
    this.saveButtonElement.click();
  }
}
