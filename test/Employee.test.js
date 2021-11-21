const chai = require("chai");
const expect = chai.expect;
const Employee = require("../Classes/Employee").Employee;

describe("Employee=>", () => {
  describe("Class instantiates correctly", () => {
    let employee = new Employee("John Smith", 60000);

    it("Has `name` property of `John Smith`", () => {
      expect(employee.getName()).to.equal("John Smith");
    });

    it("Has `annSalary` property of `60000", () => {
      expect(employee.getSalary()).to.equal(60000);
    });
  });
});
