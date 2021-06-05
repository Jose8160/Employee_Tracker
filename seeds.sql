
DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary DECIMAL(10,2) NULL, 
  department_id INT Null,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT NULL, 
  manager_id INT NULL,
  PRIMARY KEY (id)
);



INSERT INTO department (name,)
VALUES ("sales");
VALUES ("engineering");
VALUES ("finance");


INSERT INTO roles (title, salary, department_id)
VALUES ("sales lead", 3.10, 120);
VALUES ("saleperson", 3.10, 120);
VALUES ("lead Engineer", 3.10, 120);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("joe", "smith", 1, 75);
VALUES ("bob",  "cole" 2, 75);
VALUES ("carl", "cage" 3, 75);
