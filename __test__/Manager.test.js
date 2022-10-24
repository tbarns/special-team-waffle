const Manager = require('../lib/Manager')

test("Can set office number via constructor arguments", () => {
    const officeNumber = 1;
    const m = new Manager(officeNumber);
    expect(m.officeNumber).not.toBe(0);
  }); 