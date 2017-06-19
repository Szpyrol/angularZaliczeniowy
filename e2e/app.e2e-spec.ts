import { AngularZaliczeniowyPage } from './app.po';

describe('angular-zaliczeniowy App', function() {
  let page: AngularZaliczeniowyPage;

  beforeEach(() => {
    page = new AngularZaliczeniowyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
