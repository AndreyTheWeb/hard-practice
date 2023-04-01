import { validateValue } from "../helpers/helpers";

describe("validateValue", () => {
  test("Валидация значения true", () => {
    expect(validateValue(50)).toBe(true);
  });

  test("Поиграничные значения", () => {
    expect(validateValue(0)).toBe(true);
    expect(validateValue(100)).toBe(true);
    expect(validateValue(-1)).toBe(false);
  });
});
