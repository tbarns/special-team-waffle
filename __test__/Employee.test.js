const Employee = require('../lib/Employee')

test('can create employee object instance', ()=>{
    const e = new Employee();
 expect (typeof(e)).toBe('object')
})
test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });
  
//test for id
test("Can set id via constructor arguments", () => {
    const id = 13;
    const e = new Employee(id);
    expect(e.id).toBe(id);
  });
//test for email

test("Can set email via constructor arguments", () => {
    const email = "email@gmail.com";
    const e = new Employee(email);
    expect(e.email).toBe(email);
  });
