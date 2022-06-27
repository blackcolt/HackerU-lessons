const expect = require("chai").expect,
  { getCalculatePriceAfterDiscount } = require("../index");

describe("test calculate", function () {
  it("if calculate can do 10%", function () {
    const priceAfterDiscount = getCalculatePriceAfterDiscount(100, 0.1);
    expect(priceAfterDiscount).to.equal(90);
  });
  it("if calculate can do 0%", function () {
    const priceAfterDiscount = getCalculatePriceAfterDiscount(100, 0);
    expect(priceAfterDiscount).to.be.a("number");
    expect(priceAfterDiscount).to.equal(100);
  });
});
