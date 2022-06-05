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

const team = require("../team");
const Employee = require("../lib/Employee");

// generateCards(team);
const html = [];

team.forEach(employee => {
    if (Employee.getRole() === "Manager") {
        html.push(generateManager(employee));
    }else if (employee.getRole() === "Engineer") {
        html.push(generateEngineer(employee));
    }else if (employee.getRole() === "Intern") {
        html.push(generateIntern(employee))
    }
});
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