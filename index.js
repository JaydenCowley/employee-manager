
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
            // console.log(team);
            createTeam();
        });
    }
    function buildHTML(team) {
        
        let htmlData = generateHTMLTemplate(team)
        // generate(team)
        fs.writeFile("generatedHTML.html", htmlData, (err) => {
            if (err) throw err
        })
    }
    createManager();
}
startPrompt();
