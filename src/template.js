function managerSection(data) {
  // console.log(data)
  return `
  <article>
  <header>
  <h2>${manager.name}</h2>
  ROLE: ${manager.role} <br>
  ${manager.name} <br>
  </header>
  ID: ${manager.id} <br>
  EMAIL: ${manager.email} <br>
  Office Number: ${manager.officeNum}
  </article>
  `;
}
function engineerSection(data) {
 return `
  <article>
      <header>
      <h2>${engineer.name}</h2>
      ROLE: ${engineer.role} <br>
      ${engineer.name} <br>
      </header>
      ID: ${engineer.id} <br>
      EMAIL: ${engineer.email} <br>
      GITHUB: ${engineer.github}
      </article>
  `
}
function internSection(data) {
  return `
  <article>
      <header>
      <h2>${intern.name}</h2>
      ROLE: ${intern.role} <br>
      ${intern.name} <br>
      </header>
      ID: ${intern.id} <br>
      EMAIL: ${intern.email} <br>
      SCHOOL: ${intern.school}
      </article>
  `
}

module.exports = function generateHTMLTemplate(teamData) {
  return `<!DOCTYPE html>
      <html lang="en">
    
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <title>Document</title>
    </head>



    <body>
    <div>${managerSection(teamData.manager)}</div>
    <div>${engineerSection(teamData.engineer)}</div>
    <div>${internSection(teamData.intern)}</div>
    </body>
    
    </html>
    `;
}


