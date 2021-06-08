const inquirer = require("inquirer");
const { findEmployee } = require("./db/index");
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
        "add employees",
        "view departments",
        "view roles",
        "view employees",
        //   'update departments',
        "update roles",
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

        case "add employees":
          addEmployee();
          break;

        case "view departments":
          viewDepartments();
          break;

        case "view roles":
          viewRole();
          break;

        case "view employees":
          viewEmployee();
          break;

        //     case 'update departments':
        //     songAndAlbumSearch();
        //     break;

        //     case 'update role':
        //     songAndAlbumSearch();
        //     break;

        case "update employee":
          updateRole();
          break;

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

// view employee db

function viewEmployee() {
  db.findEmployee()
    .then(([rows]) => {
      let employee = rows;
      console.table(employee);
    })
    .then(() => runSearch());
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "name",
        message: "What is the name of employee?",
      },
    ])
    .then((answer) => {
      let name = answer;
      db.createEmployees(name)
        .then(() => console.log(`added ${name.name} to db`))
        .then(() => runSearch());
    });
}

runSearch();
