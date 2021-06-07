const inquirer = require("inquirer");
const db = require("./db/index");

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "add department",
        "add roles",
        //   'add employees',
        "view departments",
        "view roles",
        //   'view employees',
        //   'update departments',
        //   'update roles',
        //   'update employees',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "add department":
          addDepartment();
          break;

        case "add roles":
          addrole();
          break;

        //   case 'add employees':
        //     rangeSearch();
        //     break;

        case "view departments":
          viewDepartments();
          break;

        case "view roles":
          viewRole();
          break;

        //     case 'view employee':
        //     songAndAlbumSearch();
        //     break;

        //     case 'update departments':
        //     songAndAlbumSearch();
        //     break;

        //     case 'update role':
        //     songAndAlbumSearch();
        //     break;

        //     case 'update employee':
        //     songAndAlbumSearch();
        //     break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};
// view departments from db
function viewDepartments() {
  db.findDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => runSearch());
}
// add departments to db

function addDepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of department?",
      },
    ])
    .then((answer) => {
      let name = answer;
      db.createDepartment(name)
        .then(() => console.log(`added ${name.name} to db`))
        .then(() => runSearch());
    });
}
// view roles from db
function viewRole() {
  db.findRole()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => runSearch());
}

// add roles to db

function addrole() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of role?",
      },
    ])
    .then((answer) => {
      let name = answer;
      db.createDepartment(name)
        .then(() => console.log(`added ${name.name} to db`))
        .then(() => runSearch());
    });
}





runSearch();
