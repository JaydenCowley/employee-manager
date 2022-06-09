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
const path = require("path")
const fs = require("fs")
const outputDir = path.resolve(__dirname, "dist")
const outputPath = path.join(outputDir, "team.html")
const template = require("./src/template.js");
const html = require("./src/template.js");
var team = [];


function startPrompt() {
    // Getting Manager Information
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your ID number?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your email?"
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "What is your office number?"
            }
            // Pushing the data of the manager to the team array
        ]).then(data => {
            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNum)
            team.push(manager)
            createTeam();
        });
    }
    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What is the role of your team member?",
                choices: [
                    "Engineer",
                    "Intern",
                    "End"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    createEngineer();
                    break;
                case "Intern":
                    createIntern();
                    break;
                default: buildHTML();
            }
        })
    }
    function createEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the new employees name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the Identification number of the new employee?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the new employees email address?"
            },
            // Asking for the special parameters for each of the different roles
            {
                type: "input",
                name: "engineerGithub",
                message: "What is the engineers Github Username?",
            }
        ]).then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
            team.push(engineer)
            createTeam();
        });
    }
    function createIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the new employees name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the Identification number of the new employee?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the new employees email address?"
            },
            // Asking for the special parameters for each of the different roles
            {
                type: "input",
                name: "internSchool",
                message: "What is the interns school?",
            }
        ]).then(data => {
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
            team.push(intern)
            console.log(team);
            createTeam();
        });
    }
    function buildHTML() {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir)
        }
        generate(team)
        fs.writeFileSync(outputPath, 'template.js', "utf-8")
    }
    createManager();
}
startPrompt();
module.exports = team;