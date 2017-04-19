import { Mod05Page } from './app.po';

describe('mod05 App', () => {
  let page: Mod05Page;

  beforeEach(() => {
    page = new Mod05Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
