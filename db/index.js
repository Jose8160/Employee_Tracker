const connection = require("./connection");

class Query {
  constructor(connection) {
    this.connection = connection;
  }
  findDepartments() {
    return this.connection.promise().query("SELECT * FROM department;");
  }
  createDepartment(department) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", department);
  }

  findRole() {
    return this.connection.promise().query("SELECT * FROM roles;");
  }

  createroles(roles) {
    return this.connection.promise().query("INSERT INTO roles SET ?", roles);
  }

  findEmployee() {
    return this.connection.promise().query("SELECT * FROM employee;");
  }

  createEmployees(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employees SET ?", employee);
  }

  updateRole(role_id, id) {
    return this.connection.query(
      `UPDATE employee
        SET role_id = ? 
        WHERE id = ?;`,
      [role_id, id]
    );
  }
}

module.exports = new Query(connection);
