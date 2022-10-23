// //extend employee
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
       
        super(name, id, email)
        
        this.github = github

    }
    getRole() {
        return 'Engineer'
    }
    getGithub() { return this.github }
}
// const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
// engineer.//needs a method
module.exports = Engineer