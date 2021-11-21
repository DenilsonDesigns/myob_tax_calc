const { Employee } = require("./Employee");

class Payslip {
  constructor(name, annSalary, taxRates, thresholds) {
    this.employee = new Employee(name, annSalary);
    this.taxRates = taxRates;
    this.thresholds = thresholds;
    this.grossTax = this.calcTotalTax(this.employee.getSalary());
    this.grossMonthlyIncome = annSalary / 12;
  }

  calcTotalTax(salary) {
    let totalTax = 0;

    for (const [key, value] of Object.entries(this.taxRates)) {
      if (salary > this.thresholds[key]) {
        totalTax += (salary - this.thresholds[key]) * value;
      }
    }
    return Number(Math.round(totalTax + "e2") + "e-2");
  }

  getGrossTax() {
    return this.grossTax;
  }

  getGrossMonthlyIncome() {
    return this.grossMonthlyIncome;
  }

  monthlyTax() {
    return Number(Math.round(this.grossTax / 12 + "e2") + "e-2");
  }

  netMonthlyIncome() {
    return Number(
      Math.round(this.grossMonthlyIncome - this.monthlyTax() + "e2") + "e-2"
    );
  }

  makePaySlipObj() {
    return {
      "Monthly Payslip for:": this.employee.getName(),
      "Gross Monthly Income:": this.grossMonthlyIncome,
      "Monthly Income Tax:": this.monthlyTax(),
      "Net Monthly Income:": this.netMonthlyIncome(),
    };
  }

  printPaySlip(paySlipObj) {
    console.table(paySlipObj);
  }
}

module.exports = {
  Payslip,
};
