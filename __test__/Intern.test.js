const Intern = require('../lib/Intern')

// test("Can set school via constructor arguments", () => {
//   const school = "Yale";
//   const i = new Intern(school);
//   expect(i.school).toBe(school);
// });
test('can create Intern object instance', () => {
  const i = new Intern();
  expect(typeof (i)).toBe('object')
})