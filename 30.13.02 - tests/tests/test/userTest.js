const expect = require("chai").expect,
  { getUserById, getUsers, getAllUsers, getAllElemants } = require("../index");

describe("test calculate", function () {
  it("check if a valid  user", function () {
    getUserById().then((user) => {
      expect(user.name).to.be.equal("idan");
    });
  });
  it("check if we get more then 0 users", function () {
    getUsers().then((users) => {
      console.log(users);
      expect(users.length).to.be.above(3);
    });
  });
  it("check if we get more then users", function () {
    const users = getAllUsers();
    expect(users.length).to.be.above(0);
  });
  it("check if we get more then users", function () {
    const input = { name: null, age: 20 };
    const name = getAllElemants(input);
    expect(name).to.be.equal("idan");
  });
});
