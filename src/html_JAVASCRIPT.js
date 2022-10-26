
function generateCards(teamMembers) {
  const teamDivs = []
  //separate array based on employee type
  //use getROle method to split up array
  teamMembers.forEach(teamMember => {
    if (teamMember.getRole() == "Engineer") {
      console.log(teamMember)
      console.log(teamMember.name)
      console.log(teamMember.github)

      teamDivs.push(generateHTMLEngineer(teamMember.name, teamMember.id, teamMember.email, teamMember.github))
    }
    //if intern
    if (teamMember.getRole() == "Intern") {


      teamDivs.push(generateHTMLIntern(teamMember.name, teamMember.id, teamMember.email, teamMember.school))
    }
    //if manager
    if (teamMember.getRole() == "Manager") {
      console.log(teamMember)
      console.log(teamMember.name)
      console.log(teamMember.github)

      teamDivs.push(generateHTMLManager(teamMember.name, teamMember.id, teamMember.email, teamMember.officeNumber))
    }
  });
  return teamDivs.join("")
}


const generateHTMLEngineer = (name, id, email, github) => {
  return `
    <div class="column is-two-thirds">
    <div class="card has-background-warning">
    <header class="card-header">
    <p class="card-header-title is-size-2">
   Engineer
    </p>
    <div class="card-content">
    <div class="content is-size-1">
    ${name}
    <br>
    </div>
    </div>
    <footer class="card-footer">
   <p class="card-footer-item is-size-3">${id}</p>
   <p class="card-footer-item is-size-3"><a href="mailto:${email}"> ${email} &#9993</a></p>
   <p class="card-footer-item is-size-3"> <a href="https://github.com/${github}"> ${github}</a>  <figure class="image is-32x32 is-inline-block">
   <img src="../src/GitHub-Mark-32px-blue.png" alt="github icon">
</figure></p>
    </footer>
    </div>
    </div>
    
`}

const generateHTMLIntern = (name, id, email, school) => {
  return `
    <div class="column is-two-thirds">
    <div class="card has-background-info">
    <header class="card-header">
    <p class="card-header-title is-size-2">
      Intern
    </p>
    <div class="card-content">
    <div class="content is-size-1">
     ${name}
        <br>
       </div>
   </div>
    <footer class="card-footer">
      <p class="card-footer-item is-size-3">${id}</p>
      <p class="card-footer-item is-size-3"><a href="mailto:${email}"> ${email} &#9993</a></p>
      <p class="card-footer-item is-size-3">${school}</p>
    </footer>
   </div>
   </div>
   
   `
}

const generateHTMLManager = (name, id, email, officeNumber) => {
  return `<div class="columns">
    <div class="column is-two-thirds">
    <div class="card has-background-primary">
    <header class="card-header">
    <p class="card-header-title is-size-2"> 
    Manager
    </p>
    <div class="card-content">
    <div class="content is-size-1">
     ${name}
        <br>
       </div>
   </div>
    <footer class="card-footer">
      <p class="card-footer-item is-size-3">${id}</p>
      <p class="card-footer-item is-size-3"><a href="mailto:${email}"> ${email} &#9993</a></p>
      <p class="card-footer-item is-size-3">${officeNumber}</p>
    </footer>
   </div>
   </div>
   </div>

`
}

const writeHTML = (data) => {

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
        <title>Team Builder</title>
    </head>
    <body class= "has-background-danger-light">
    <br><br>
    <h1 class= "title is-size 1"> Employee Roster Generator </h1>
    <br>
        
      ${generateCards(data)}
    
       
    </body>
    </html>
    `
}


module.exports = writeHTML