import main from "./conversion";

describe("変換処理のテスト", () => {
  test("1", () => {
    const result = main(1);
    expect(result).toEqual("one");
  });

  test("11", () => {
    const result = main(11);
    expect(result).toEqual("eleven");
  });

  test("234", () => {
    const result = main(234);
    expect(result).toEqual("two hundred thirty four");
  });

  test("5792", () => {
    const result = main(5792);
    expect(result).toEqual("five thousand seven hundred ninety two");
  });

  test("1.1", () => {
    const result = main(1.1);
    expect(result).toEqual("one point one");
  });

  test("0.25", () => {
    const result = main(0.25);
    expect(result).toEqual("zero point two five");
  });

  test("-15", () => {
    const result = main(-1);
    expect(result).toEqual("negative fifteen");
  });

  test("", () => {
    const result = main("");
    expect(result).toEqual("Please input number");
  });

  test(" ", () => {
    const result = main(" ");
    expect(result).toEqual("Please input number");
  });

  test("abc", () => {
    const result = main("abc");
    expect(result).toEqual("Please input number");
  });
});
