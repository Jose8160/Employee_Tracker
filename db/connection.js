const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "password",
  database: "employee_trackerDB",
});

connection.connect((err) => {
  if (err) throw err;
});
module.exports = connection;
