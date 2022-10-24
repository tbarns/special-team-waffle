const Engineer = require('../lib/Engineer')

test("Can set id via constructor arguments", () => {
  const id = ">0";
  const eng = new Engineer(id);
  expect(eng.id).not.toBe(0);
});

// test("Can set github via constructor arguments", () => {
//     const github = "github";
//     const eng = new Engineer(github);
//     expect(eng.github).toBe(github);
//   });