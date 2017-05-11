import { PontoFitSCSSWebpackPage } from './app.po';

describe('ponto-fit-scsswebpack App', () => {
  let page: PontoFitSCSSWebpackPage;

  beforeEach(() => {
    page = new PontoFitSCSSWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
