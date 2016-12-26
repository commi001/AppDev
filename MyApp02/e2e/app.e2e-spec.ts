import { MyApp02Page } from './app.po';

describe('my-app02 App', function() {
  let page: MyApp02Page;

  beforeEach(() => {
    page = new MyApp02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
