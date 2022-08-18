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
// const path = require("path")
const fs = require("fs")
// const outputDir = path.resolve(__dirname, "dist")
// const outputPath = path.join(outputDir, "team.html")
const template = require("./src/template.js");
const writeFile = require('./src/generate.js');
const generateHTMLTemplate = require('./src/template')

var team = [];
team.manager = [];//duplicate for inter and engineer
team.intern = [];
team.engineer = [];

function startPrompt() {
    // Getting Manager Information
    function createManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your manager name?"
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
            // Pushing the data of the manager to the team array
        ]).then(data => {
            this.manager = new Manager(data.name, data.id, data.email, data.officeNum)
            this.manager.getRole
            team.manager.push(this.manager)
            createTeam();
           return team;
        });
    }
    function createTeam(teamData) {
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
                    createEngineer(teamData);
                    break;
                case "Intern":
                    createIntern(teamData);
                    break;
                default: buildHTML(team);
            }
        })
    }
    function createEngineer(teamData) {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the new employees name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Identification number of the new employee?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the new employees email address?"
            },
            // Asking for the special parameters for each of the different roles
            {
                type: "input",
                name: "github",
                message: "What is the engineers Github Username?",
            }
        ]).then(data => {
            this.engineer = new Engineer(data.name, data.id, data.email, data.github)
            this.engineer.getRole
            team.engineer.push(this.engineer)
            createTeam();
        });
    }
    function createIntern(teamData) {
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the new employees name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Identification number of the new employee?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the new employees email address?"
            },
            // Asking for the special parameters for each of the different roles
            {
                type: "input",
                name: "school",
                message: "What is the interns school?",
            }
        ]).then(data => {
            this.intern = new Intern(data.name, data.id, data.email, data.school)
            this.intern.getRole
            team.intern.push(this.intern)
            console.log(team);
            createTeam();
        });
    }
    function buildHTML(team) {
        console.log(team)
        let htmlData = generateHTMLTemplate(team)
        // generate(team)
        fs.writeFile("generatedHTML.html", htmlData, (err) => {
            if (err) throw err
        })
    }
    createManager();
}
startPrompt();
