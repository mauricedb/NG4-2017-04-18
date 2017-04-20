import { Mod09Page } from './app.po';

describe('mod09 App', () => {
  let page: Mod09Page;

  beforeEach(() => {
    page = new Mod09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
