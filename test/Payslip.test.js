const chai = require("chai");
const expect = chai.expect;
const Payslip = require("../Classes/Payslip").Payslip;
const { THRESHOLDS, TAX_RATES } = require("../util/constants");

describe("Payslip=>", () => {
  describe("Class instantiates correctly", () => {
    const payslip = new Payslip("Mary Smith", 60000, TAX_RATES, THRESHOLDS);

    it("Has a name property on `employee` of 'Mary Smith'", () => {
      expect(payslip.employee.getName()).to.equal("Mary Smith");
    });

    it("Has a 'annSalary' property on `employee` of 60000", () => {
      expect(payslip.employee.getSalary()).to.equal(60000);
    });
  });

  describe("Methods function correctly", () => {
    // calcTax on tax-free threshold.
    it("Calculates 0 tax for salary below 20000", () => {
      const payslip = new Payslip("Mary Smith", 18000, TAX_RATES, THRESHOLDS);

      expect(payslip.getGrossTax()).to.equal(0);
    });

    // calcTax on first threshold (0.1)
    it("Calculates tax correctly for salary above 20001 and below 40000", () => {
      const SALARY = 21001;
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);

      let expectedTax = (SALARY - 20001) * 0.1;
      expectedTax = Number(Math.round(expectedTax + "e2") + "e-2");

      expect(payslip.getGrossTax()).to.equal(expectedTax);
    });

    it("Calculates tax correctly for salary above 40000 and below 80000", () => {
      const SALARY = 60000;
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);

      let expectedTax = (SALARY - 20001) * 0.1;
      expectedTax += (SALARY - 40001) * 0.2;
      expectedTax = Number(Math.round(expectedTax + "e2") + "e-2");

      expect(payslip.getGrossTax()).to.equal(expectedTax);
    });

    it("Calculates tax correctly for salary above 80000 and below 180000", () => {
      const SALARY = 90000;
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);

      let expectedTax = (SALARY - 20001) * 0.1;
      expectedTax += (SALARY - 40001) * 0.2;
      expectedTax += (SALARY - 80001) * 0.3;
      expectedTax = Number(Math.round(expectedTax + "e2") + "e-2");

      expect(payslip.getGrossTax()).to.equal(expectedTax);
    });

    it("Calculates tax correctly for salary above 180001", () => {
      const SALARY = 190000;
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);

      let expectedTax = (SALARY - 20001) * 0.1;
      expectedTax += (SALARY - 40001) * 0.2;
      expectedTax += (SALARY - 80001) * 0.3;
      expectedTax += (SALARY - 180001) * 0.4;
      expectedTax = Number(Math.round(expectedTax + "e2") + "e-2");

      expect(payslip.getGrossTax()).to.equal(expectedTax);
    });

    it("getGrossTax returns gross tax amount", () => {
      // could put any calc here really, just test it returns a valid tax amt.
      const SALARY = 90000;
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);

      let expectedTax = (SALARY - 20001) * 0.1;
      expectedTax += (SALARY - 40001) * 0.2;
      expectedTax += (SALARY - 80001) * 0.3;
      expectedTax = Number(Math.round(expectedTax + "e2") + "e-2");

      expect(payslip.getGrossTax()).to.equal(expectedTax);
    });

    it("getGrossMonthlyIncome returns correct monthly income", () => {
      const SALARY = 90000;
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);

      expect(payslip.getGrossMonthlyIncome()).to.equal(7500);
    });

    it("monthlyTax returns correct monthly tax amount", () => {
      const SALARY = 90000;
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);

      expect(payslip.monthlyTax()).to.equal(1666.62);
    });

    it("netMonthlyIncome returns correct monthly income minus tax", () => {
      const SALARY = 90000;
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);

      expect(payslip.netMonthlyIncome()).to.equal(5833.38);
    });

    it("correctly forms payslipObj", () => {
      const SALARY = 90000;
      const expected = {
        "Monthly Payslip for:": "Mary Smith",
        "Gross Monthly Income:": 7500,
        "Monthly Income Tax:": 1666.62,
        "Net Monthly Income:": 5833.38,
      };
      const payslip = new Payslip("Mary Smith", SALARY, TAX_RATES, THRESHOLDS);
      expect(payslip.makePaySlipObj()).to.eql(expected);
    });
  });
});
