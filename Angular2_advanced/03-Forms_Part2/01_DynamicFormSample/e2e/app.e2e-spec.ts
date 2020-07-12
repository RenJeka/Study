import { DynamicFormSamplePage } from "./app.po";

describe("dynamic-form-sample App", () => {
  let page: DynamicFormSamplePage;

  beforeEach(() => {
    page = new DynamicFormSamplePage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("Welcome to app!");
  });
});
