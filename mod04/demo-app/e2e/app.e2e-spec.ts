import { DemoAppPage } from './app.po';

describe('demo-app App', () => {
  let page: DemoAppPage;

  beforeEach(() => {
    page = new DemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app really works!');
  });
});
