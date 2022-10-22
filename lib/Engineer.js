// //extend employee
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.github = github

        super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;

    }
    getRole() {
        return 'Engineer'
    }
    getGithub() { return this.github }
}
const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
engineer.//needs a method