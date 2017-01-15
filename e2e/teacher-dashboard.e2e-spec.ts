import { TeacherDashboardPage } from './teacher-dashboard.po';

describe('Teacher Dashboard Page', function() {
  let page: TeacherDashboardPage;

  beforeEach(() => {
    page = new TeacherDashboardPage();
  });

  it('should display message saying app works', () => {
    page.validateIntegrityOfPage();
  });
});
