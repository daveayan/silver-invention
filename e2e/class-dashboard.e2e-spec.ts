import { NewClassPageObject } from './po/new-class.po';
import { ListClassPageObject } from './po/list-classes.po';

describe('Class Dashboard Page', function() {
  let newClassPO: NewClassPageObject;
  let listClassPO: ListClassPageObject;

  beforeEach(() => {
    newClassPO = new NewClassPageObject();
    listClassPO = new ListClassPageObject();
  });

  it('has form field validations', () => {
    newClassPO.validateIntegrityOfPage();
  });

  it('has a list of classes in database', () => {
    listClassPO.listShouldHave('Monday Class, Start Date: 08/01/2016');
    listClassPO.listShouldHave('Wednesday Class, Start Date: 08/03/2016');
  });

  it('can add a new class to the list', () => {
    newClassPO.addNewClass('Saturday Class', '08/06/2016');
    listClassPO.listShouldHave('Monday Class, Start Date: 08/01/2016');
    listClassPO.listShouldHave('Wednesday Class, Start Date: 08/03/2016');
    listClassPO.listShouldHave('Saturday Class, Start Date: 08/06/2016');
  });

  it('remove class from list', () => {
    listClassPO.removeClass('Wednesday Class, Start Date: 08/03/2016');
    listClassPO.listShouldHave('Monday Class, Start Date: 08/01/2016');
    listClassPO.listShouldHave('Saturday Class, Start Date: 08/06/2016');
    listClassPO.listShouldNotHave('Wednesday Class, Start Date: 08/03/2016');
  });
});
