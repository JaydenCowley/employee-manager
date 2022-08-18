function managerSection(data) {
  return `
  <article>
  <header>
  ROLE: ${data.role} <br>
  ${data.name} <br>
  </header>
  ID: ${data.id} <br>
  EMAIL: ${data.email} <br>
  Office Number: ${data.officeNum}
  </article>
  `;
}
function engineerSection(data) {
 return `
  <article>
      <header>
      ROLE: ${data.role} <br>
      ${data.name} <br>
      Engineer
      </header>
      ID: ${data.id} <br>
      EMAIL: ${data.email} <br>
      GITHUB: ${data.github}
      </article>
  `
}
function internSection(data) {
  return `
  <article>
      <header>
      ROLE: ${data.role} <br>
      ${data.name} <br>
      Engineer
      </header>
      ID: ${data.id} <br>
      EMAIL: ${data.email} <br>
      SCHOOL: ${data.school}
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


