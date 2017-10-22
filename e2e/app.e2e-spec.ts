import { InterprintkgPage } from './app.po';

describe('interprintkg App', () => {
  let page: InterprintkgPage;

  beforeEach(() => {
    page = new InterprintkgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
