import { SilverInventionUiPage } from './app.po';

describe('silver-invention-ui App', function() {
  let page: SilverInventionUiPage;

  beforeEach(() => {
    page = new SilverInventionUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
