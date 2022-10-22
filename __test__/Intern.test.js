const Employee = require('../lib/Employee')

test("Can set school via constructor arguments", () => {
    const school = "Yale";
    const e = new Employee(school);
    expect(e.school).toBe(school);
  });