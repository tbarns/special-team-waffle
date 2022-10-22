const Employee = require('../lib/Employee')

test("Can set office number via constructor arguments", () => {
    const officeNumber = 1;
    const e = new Employee(officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
  }); 