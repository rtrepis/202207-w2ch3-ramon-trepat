import strictEqual from "./index";

describe("Given a value A and B returns ", () => {
  test("when it's called 1 and 1 recived true", () => {
    const a = 1;
    const b = 1;
    const back = true;

    const isEqual = strictEqual(a, b);

    expect(isEqual).toBe(back);
  });

  test("when it's called and NaN and NaN it recived false", () => {
    const a = NaN;
    const b = NaN;
    const back = false;

    const isEqual = strictEqual(a, b);

    expect(isEqual).toBe(back);
  });
});
