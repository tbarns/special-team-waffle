
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school) {
        

        super(name, id, email)
        
        this.school = school

    }
    getRole() {
        return 'Intern'
    }
    getSchool() { return this.school }
}
// const intern = new Intern(answers.name, answers.id, answers.email, answers.school)

// intern.//needs a method
module.exports = Intern