class Employee {
  #name;
  #annSalary;

  constructor(name, annSalary) {
    this.#name = name;
    this.#annSalary = annSalary;
  }

  getName() {
    return this.#name;
  }

  getSalary() {
    return this.#annSalary;
  }
}

module.exports = {
  Employee,
};
