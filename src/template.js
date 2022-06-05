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
    return ``
}
 function generateEngineer(team) {
    return ``
}
 function generateIntern(team) {
    return ``
}