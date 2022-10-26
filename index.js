const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer')
const writeHTML = require('./src/html_JAVASCRIPT')
const fs = require('fs')
const teamMembers = []
console.log(teamMembers)
init()
//add manager credentials
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your full name?',
      },

      {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID number?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },

      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number username?',
      },

    ])
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      teamMembers.push(manager)
      buildTeam()
    }
    )
}
function buildTeam() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'selection',
        message: 'What employee type are you adding?',
        choices: ['Intern', new inquirer.Separator(), 'Engineer', new inquirer.Separator(), 'Finished adding employees']
      }
    ])
    .then((answers) => {
      switch (answers.selection) {
        case 'Engineer':
          engineerSelection();
          break;
        case 'Intern':
          internSelection();
          break;
        default:
          renderTeam()

      }
    })
}


function internSelection() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the intern's full name?",
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school are they attending?',
      },

    ])
    .then((answers) => {
      // const internContent = generateHTMLIntern(answers)
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      teamMembers.push(intern)
      buildTeam()

    });

}

function engineerSelection() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is their full name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is their employee ID?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is their email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub username?',
      },

    ])
    .then((answers) => {
      // const engineerContent = generateHTMLEngineer(answers)
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
      teamMembers.push(engineer)

      buildTeam()
    });

}


function renderTeam() {
  fs.writeFile('index.html', writeHTML(teamMembers), (err) =>
    err ? console.log(err) : console.log('Successfully created wrote HTML info!')
  );
};

module.exports = teamMembers