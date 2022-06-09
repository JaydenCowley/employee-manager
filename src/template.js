// const generateCards = function (team) {
//     // iterate through the array of team members
//     for (var i = 0; i < team.length; i++) {
//         var team = team[i]
//         // iterate through the keys of the object
//         for (var i = 0; i < team.keys.length; i++) {
//             //var cardInfo = 
//             console.log(team.keys[i]);
//         }
//     }
// }

const team = require("../index.js");
const Employee = require("../lib/Employee");

// generateCards(team);


function generateManager(team) {
    return `<!-- Manager Card -->
    <article>
    <header>
    ${team.managerName} <br>
    Manager
    </header>
    ID: ${team.managerId} <br>
    EMAIL: ${team.managerEmail} <br>
    Office Number: ${team.managerOfficeNum}
    </article>`
}
function generateEngineer(team) {
    return `<!-- Engineer Card -->
    <article>
    <header>
    ${team.engineerName} <br>
    Engineer
    </header>
    ID: ${team.engineerId} <br>
    EMAIL: ${team.engineerEmail} <br>
    Office Number: ${team.engineerGithub}
    </article>`
}
function generateIntern(team) {
    return `<!-- Intern Card -->
    <article>
    <header>
    ${team.internName} <br>
    Intern
    </header>
    ID: ${team.internId} <br>
    EMAIL: ${team.internEmail} <br>
    Office Number: ${team.internSchool}
    </article>`
}
function generateHTMLTemplate () {
    
    let html = (`<!DOCTYPE html>
    <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <title>Document</title>
    </head>
    ${function generate(team) {
    for (i = 0; i < team.length; i++) {
        if ([i].getRole() === "Manager") {
            html.push(generateManager(team));
        }else if ([i].getRole() === "Engineer") {
            html.push(generateEngineer(team));
        }else if ([i].getRole() === "Intern") {
            html.push(generateIntern(team))
        }
        return html;
    };
    }
}

    <body>
    <main class="container">
    </main>
    </body>
    
    </html>`)
}
generateHTMLTemplate();
// team.forEach(employee => {
//     if (employee.getRole() === "Manager") {
//         html.push(generateManager(team));
//     }else if (employee.getRole() === "Engineer") {
//         html.push(generateEngineer(team));
//     }else if (employee.getRole() === "Intern") {
//         html.push(generateIntern(team))
//     }
// });

module.exports = generateHTMLTemplate();