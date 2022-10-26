const teamMembers = require('../index.js')


// function generateCards (teamMembers){
//     //separate array based on employee type
//     //use getROle method to split up array
//     array.forEach(element => {( element.getRole() == "engineer")
        
//     });
// }


const generateHTMLEngineer = ({name, id, email, github}) =>
    `
 <div class="card">
 <header class="card-header">
 <p class="card-header-title">
   Engineer
 </p>
 <div class="card-content">
 <div class="content">
  ${name}
     <br>
    </div>
</div>
 <footer class="card-footer">
   <p class="card-footer-item">${id}</p>
   <p class="card-footer-item">${email}</p>
   <p class="card-footer-item">${github}</p>
 </footer>
</div>
`
const generateHTMLIntern = ({ name, id, email, school }) =>
    `
    <div class="card">
    <header class="card-header">
    <p class="card-header-title">
      Intern
    </p>
    <div class="card-content">
    <div class="content">
     ${name}
        <br>
       </div>
   </div>
    <footer class="card-footer">
      <p class="card-footer-item">${id}</p>
      <p class="card-footer-item">${email}</p>
      <p class="card-footer-item">${school}</p>
    </footer>
   </div>
   `
 

const generateHTMLManager = ({ name, id, email, officeNumber }) =>
    `
    <div class="card">
    <header class="card-header">
    <p class="card-header-title">
      Manager
    </p>
    <div class="card-content">
    <div class="content">
     ${name}
        <br>
       </div>
   </div>
    <footer class="card-footer">
      <p class="card-footer-item">${id}</p>
      <p class="card-footer-item">${email}</p>
      <p class="card-footer-item">${officeNumber}</p>
    </footer>
   </div>
   

`



const writeHTML = () =>

    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
        <title>Team Builder</title>
    </head>
    <body>
        ${generateHTMLEngineer}
        ${generateHTMLIntern}
        ${generateHTMLManager}
    </body>
    </html>
    `



module.exports = writeHTML