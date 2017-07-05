import { DiordFrontPage } from './app.po';

describe('diord-front App', () => {
  let page: DiordFrontPage;

  beforeEach(() => {
    page = new DiordFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
