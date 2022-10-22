//extend employee

const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber

        super(name, id, email)
        // this.name = name;
        // this.id = id;
        // this.email = email;

    }
    getRole() {
        return 'Manager'
    }
    getOfficeNumber() { return this.officeNumber }
}
// const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
// manager.//needs a method
module.exports = Manager 
