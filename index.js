const { Payslip } = require("./Classes/Payslip");
const { THRESHOLDS, TAX_RATES } = require("./util/constants");

let myArgs = process.argv.slice(2);
let employeeName = "";
let employeeSalary = 0;

// *** Check CLI args given
if (myArgs.length === 0) {
  console.log("please give arguments to the command");
  console.log(`Example: node index.js "John Smith" 60000`);
  process.exit();
}

// *** check name
let name = myArgs[0];
if (parseInt(name) || name.length < 1) {
  console.log("please enter a valid name (not digits)");
  process.exit();
} else {
  employeeName = name;
}

let salary = myArgs[1];
// ***check salary is valid.
if (!parseInt(salary) || parseInt(salary) < 1) {
  console.log("Please parse in a valid salary (valid number above 0)");
  process.exit();
} else {
  employeeSalary = salary;
}

const payslip = new Payslip(
  employeeName,
  employeeSalary,
  TAX_RATES,
  THRESHOLDS
);

const payslipObj = payslip.makePaySlipObj();
payslip.printPaySlip(payslipObj);
