import { ChangeLayoutPage } from './app.po';

describe('change-layout App', () => {
  let page: ChangeLayoutPage;

  beforeEach(() => {
    page = new ChangeLayoutPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
