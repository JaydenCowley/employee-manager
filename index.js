// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab


// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
const inquirer = require("inquirer")
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
var team = [];
team.manager = [];
team.engineer = [];
team.intern = [];

function startPrompt() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your ID number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },
        {
            type: "input",
            name: "officeNum",
            message: "What is your office number?"
        }
    ]).then(data => {
        this.manager = new Manager(data.name, data.id, data.email, data.officeNum)
        team.manager.push(this.manager)
        return team
    }).then(
        inquirer.prompt([
            {
                type: "confirm",
                name: "newEmployeeConfirm",
                message: "Would you like to Add a new employee?",
                default: true
            },
            {
                type: "list",
                message: "Select the role of the new Employee",
                choices: [
                    "Intern",
                    "Engineer",
                ],
                when: ({ newEmployeeConfirm }) => newEmployeeConfirm
            },
            {
                type: "input",
                message: "What is the Interns School?",
                when: ({ intern }) => intern
            }
        ])
    )
}
startPrompt();