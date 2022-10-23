const Engineer = require('../lib/Engineer')

test("Can set github via constructor arguments", () => {
    const github = "github";
    const eng = new Engineer(github);
    expect(eng.github).toBe(github);
  });