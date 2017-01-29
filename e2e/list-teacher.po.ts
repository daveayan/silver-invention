import { browser, element, by } from 'protractor';

export class ListTeacherPageObject {
  listOfTeachersElement = element(by.id('idListOfTeachers'));

  listShouldHave(name) {
    let promiseListOfNames = this.listOfTeachersElement.all(by.className('md-list-item')).map(function(e) {
      return e.getText();
    });
    promiseListOfNames.then(function(textListOfNames) {
      expect(textListOfNames).toContain(name + '    \n-');
    });
  }

  listNotShouldHave(name) {
    let promiseListOfNames = this.listOfTeachersElement.all(by.className('md-list-item')).map(function(e) {
      return e.getText();
    });
    promiseListOfNames.then(function(textListOfNames) {
      expect(textListOfNames).not.toContain(name + '    \n-');
    });
  }

  removeTeacher(name) {
    const expectedName = name + '    \n-';
    let promiseListOfNames = this.listOfTeachersElement.all(by.className('md-list-item')).map(function(e) {
      let removeButton = e.element(by.tagName('button'));
      e.getText().then(function(ve) {
        if (expectedName === ve) {
          removeButton.click();
        }
      });
      return e.getText();
    });
  }

  validateIntegrityOfListTeachersComponent() {
  }
}
