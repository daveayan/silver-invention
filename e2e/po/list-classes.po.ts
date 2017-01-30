import { browser, element, by } from 'protractor';

export class ListClassPageObject {
  listOfClassesElement = element(by.id('idListOfClasses'));

  listShouldHave(name) {
    let promiseListOfNames = this.listOfClassesElement.all(by.className('md-list-item')).map(function(e) {
      return e.getText();
    });
    promiseListOfNames.then(function(textListOfNames) {
      expect(textListOfNames).toContain(name + '    \n-');
    });
  }

  listShouldNotHave(name) {
    let promiseListOfNames = this.listOfClassesElement.all(by.className('md-list-item')).map(function(e) {
      return e.getText();
    });
    promiseListOfNames.then(function(textListOfNames) {
      expect(textListOfNames).not.toContain(name + '    \n-');
    });
  }

  removeClass(name) {
    const expectedName = name + '    \n-';
    let promiseListOfNames = this.listOfClassesElement.all(by.className('md-list-item')).map(function(e) {
      let removeButton = e.element(by.tagName('button'));
      e.getText().then(function(ve) {
        if (expectedName === ve) {
          removeButton.click();
        }
      });
      return e.getText();
    });
  }

  validateIntegrityOfListClassesComponent() {
  }
}
