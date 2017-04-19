import { Mod06Page } from './app.po';

describe('mod06 App', () => {
  let page: Mod06Page;

  beforeEach(() => {
    page = new Mod06Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
