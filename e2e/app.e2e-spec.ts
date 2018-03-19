import { DiordFrontPage } from './app.po';

describe('diord-front App', () => {
  let page: DiordFrontPage;

  beforeEach(() => {
    page = new DiordFrontPage();
  });

  it('should display h2 title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Liste des produits');
  });
});
