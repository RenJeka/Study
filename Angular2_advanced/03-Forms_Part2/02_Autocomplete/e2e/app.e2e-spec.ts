import { AdvacnedSamplesPage } from './app.po';

describe('advacned-samples App', () => {
  let page: AdvacnedSamplesPage;

  beforeEach(() => {
    page = new AdvacnedSamplesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
