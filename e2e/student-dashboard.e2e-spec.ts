import { NewStudentPageObject } from './po/new-student.po';
import { ListStudentPageObject } from './po/list-student.po';

describe('Student Dashboard Page', function() {
  let newStudentPO: NewStudentPageObject;
  let listStudentPO: ListStudentPageObject;

  beforeEach(() => {
    newStudentPO = new NewStudentPageObject();
    listStudentPO = new ListStudentPageObject();
  });

  it('has form field validations', () => {
    newStudentPO.validateIntegrityOfPage();
  });

  it('has a list of teachers in database', () => {
    listStudentPO.listShouldHave('Magneta, Grade 1');
    listStudentPO.listShouldHave('Tornado, Grade K');
  });

  it('can add a new teacher to the list', () => {
    newStudentPO.addStudent('Hurricane', '2');
    listStudentPO.listShouldHave('Magneta, Grade 1');
    listStudentPO.listShouldHave('Tornado, Grade K');
    listStudentPO.listShouldHave('Hurricane, Grade 2');
  });

  it('remove teacher from list', () => {
    listStudentPO.removeStudent('Hurricane, Grade 2');
    listStudentPO.listShouldHave('Magneta, Grade 1');
    listStudentPO.listShouldHave('Tornado, Grade K');
    listStudentPO.listShouldNotHave('Hurricane, Grade 2');
  });
});
