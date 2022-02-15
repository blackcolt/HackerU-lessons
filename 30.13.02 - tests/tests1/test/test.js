const assert = require("assert"),
  chaiHttp = require("chai-http"),
  chai = require("chai"),
  { expect } = chai;

chai.use(chaiHttp);
chai.should();

describe("Array", function () {
  // it("should return -1 when the value is not present", function (done) {
  //   chai
  //     .request("http://localhost:3000")
  //     .get("/")
  //     .end((err, res) => {
  //       expect(err).to.be.null;
  //       res.statusCode.should.be.equal(200);
  //       res.should.to.be.json;
  //       console.log(res.body);
  //       // res.body.length.should.greaterThan(0);
  //       done();
  //     });
  // });

  it("should get all users", function (done) {
    chai
      .request("http://localhost:3000")
      .get("/users")
      .end((err, res) => {
        expect(err).to.be.null;
        res.statusCode.should.be.equal(200);
        res.should.to.be.json;
        const users = res.body;
        res.body.length.should.greaterThan(0);
        for (let user of users) {
          expect(user).to.not.have.property("password");
          // expect(new Set([1, 2, 3])).to.have.property('size', 3); // Recommended
          //
          // expect(user.ffffff).to.be.not.empty;
          // expect(user.age).to.be.greater.or.equal(18);
        }
        done();
      });
  });

  it("should get 404", function (done) {
    chai
      .request("http://localhost:3000")
      .get("/asdasdasdasdqsdqwd")
      .end((err, res) => {
        expect(err).to.be.null;
        res.statusCode.should.be.equal(404);
        done();
      });
  });
});
