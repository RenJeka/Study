import { ValidatorsPage } from "./app.po";

describe("validators App", () => {
  let page: ValidatorsPage;

  beforeEach(() => {
    page = new ValidatorsPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to app!");
  });
});
