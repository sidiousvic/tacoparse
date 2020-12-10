const { expect } = require("chai");
const { tacoparse } = require("../tacoparse.js");

describe("tacoparse", function () {
  it("🌮 Should throw an error if given a string input", () => {
    const invalidInputTacoparse = tacoparse.bind(null, "9");
    const validInputTacoparse = tacoparse.bind(null, 9);
    expect(invalidInputTacoparse).to.throw();
    expect(validInputTacoparse).to.not.throw();
  });

  it("🌮 Should return a string", () => {
    const nineTacosString = tacoparse(9);
    expect(typeof nineTacosString).to.equal("string");
  });

  it("🌮 Should return the correct number of tacos", () => {
    const ninetyNineTacoString = tacoparse(999);
    const ninetyNineTacoArray = [...ninetyNineTacoString];
    expect(ninetyNineTacoArray.length).to.equal(999);
  });

  it("🌮 Should return the taco emoji", () => {
    const tacoEmojiString = tacoparse(1);
    expect(tacoEmojiString).to.equal("🌮");
  });

  it("🌮 Should return a sad face if the number is zero", () => {
    const tacoEmojiString = tacoparse(0);
    expect(tacoEmojiString).to.equal(":(");
  });
});
