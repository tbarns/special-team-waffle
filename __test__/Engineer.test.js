const Employee = require('../lib/Employee')

test("Can set github via constructor arguments", () => {
    const github = "tbarns";
    const e = new Employee(github);
    expect(e.github).toBe(github);
  });