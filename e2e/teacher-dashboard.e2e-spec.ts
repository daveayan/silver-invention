import { NewTeacherPageObject } from './new-teacher.po';
import { ListTeacherPageObject } from './list-teacher.po';

describe('Teacher Dashboard Page', function() {
  let newTeacherPO: NewTeacherPageObject;
  let listTeacherPO: ListTeacherPageObject;

  beforeEach(() => {
    newTeacherPO = new NewTeacherPageObject();
    listTeacherPO = new ListTeacherPageObject();
  });

  it('has form field validations', () => {
    newTeacherPO.validateIntegrityOfPage();
  });

  it('has a list of teachers in database', () => {
    listTeacherPO.listShouldHave('Charles Xavier');
    listTeacherPO.listShouldHave('Peter Parker');
  });

  it('can add a new teacher to the list', () => {
    newTeacherPO.addTeacher('Clark Kent', '01/10/2010');
    listTeacherPO.listShouldHave('Charles Xavier');
    listTeacherPO.listShouldHave('Clark Kent');
    listTeacherPO.listShouldHave('Peter Parker');
  });

  it('remove teacher from list', () => {
    listTeacherPO.removeTeacher('Peter Parker');
    listTeacherPO.listShouldHave('Charles Xavier');
    listTeacherPO.listShouldHave('Clark Kent');
    listTeacherPO.listNotShouldHave('Peter Parker');
  });

  it('can add teachers', () => {
    newTeacherPO.addTeacher('Clark Kent', '01/10/2010');
  });
});
