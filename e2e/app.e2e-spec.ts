import { TemplateDrivenPage } from './app.po';

describe('template-driven App', () => {
  let page: TemplateDrivenPage;

  beforeEach(() => {
    page = new TemplateDrivenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
