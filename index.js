// GIVEN a command-line application that accepts user input TODO: **USE INQUIERER TO ACCEPT USER DATA
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// TODO: ** USING ALL THAT DATA CREATE AN HTML FILE


// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
//** TODO: BEHAVIOR OF THE HTML

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// TODO: ** THIS WILL BE APART OF THE PROMPT FROM INQUIRER 4 PROMPTS


// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

//** TODO: SEPREATE FUNCTION MENU OPTIONS "LIST" ADD ENG || ADD INTERN || FINISH BUILDING MY TEAM


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// TODO:  ** SPREATE FUNCTION FOR ENG... + INQUE PROMPT 4 - NAME, ID EMAIL GITHUB USERNAME... THEN CALL MENU FUNCTION IF RESPONSE.MENU 


// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// TODO: **SPE FUNCTION FOR INTER + INQ PROMT THEN CALL MENU FUNCTION

//  WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


//**WHEN QUIT IS SELECTED WIRTE FILE TO html.index

// TODO:   SCR FOLDER WILL BE WHERE WE ARE CREATING THE DYNAMIC HTML DEPENDING ON USER INPUT HTMLJAVASCRIPTJS()
// TODO:  IN ORDER TO DO THIS WE NEED TO SPLIT UP THE ARRAY BASED ON TYPE OF EMPLOYEE

const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer')
const fs = require('fs')
const teamMembers = []

init()
//add maanger credtioanls
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
        message: 'What is your full name?',
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your employee ID?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'school',
        message: 'What school are you attending?',
      },

    ])
    .then((answers) => {
      // const internContent = generateHTMLIntern(answers)
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      teamMembers.push(intern)

      fs.writeFile('index.html', internContent, (err) =>
        err ? console.log(err) : console.log('Successfully created wrote intern info!')
      );
    });

}

function engineerSelection() {
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
        message: 'What is your employee ID?',
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },

    ])
    .then((answers) => {
      // const engineerContent = generateHTMLEngineer(answers)
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
      teamMembers.push(engineer)

      fs.writeFile('index.html', engineerContent, (err) =>
        err ? console.log(err) : console.log('Successfully created wrote engineer info!')
      );
    });

}


//create this 
function renderTeam() {
  fs.writeFile('index.html', writeHTMLFile(teamMembers), (err) =>
    err ? console.log(err) : console.log('Successfully created wrote intern info!')
  );
};
