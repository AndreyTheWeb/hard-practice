import { square } from "../helpers/helpers";

describe("square", () => {
  test("Корректное значение", () => {
    expect(square(25)).toBe(625);
  });
});
