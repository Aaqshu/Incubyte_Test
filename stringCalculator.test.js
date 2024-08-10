const StringCalculator = require("./StringCalculator");

const calculator = new StringCalculator();


test("if String is empty it sould return 0", () => {
    expect(calculator.add("")).toBe(0);
});

test("add method should able to handle any amount of numbers", () => {
    expect(calculator.add("1,2,3,4")).toBe(10);
    expect(calculator.add("1,5")).toBe(6);
});

test("add method should be able to handle new lines between numbers (instead of commas)", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
});

test("add method should be able to handle new lines between numbers (instead of commas)", () => {
    expect(calculator.add("1\n2,3")).toBe(6);
});

test("add method should be able to support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
});

test("add method should return an error when entering negative number", () => {
    const numbers = "-1,-2,3";
  expect(calculator.add(numbers)).toBe("Negative numbers not allowed: -1, -2");

})