const connection = require("./connection");

class Query {
  constructor(connection) {
    this.connection = connection;
  }
  findDepartments(){
      return this.connection.promise().query(
         'SELECT * FROM department;'
      )
  }
}

module.exports = new Query(connection)