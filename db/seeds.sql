INSERT INTO department (name)
VALUES ("sales"),
("engineering"),
("finance");


INSERT INTO roles (title, salary, department_id)
VALUES ("sales lead", 3.10, 120),
("saleperson", 3.10, 120),
("lead Engineer", 3.10, 120);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("joe", "smith", 1, NULL),
("bob",  "cole", 2, NULL),
("carl", "cage", 3, NULL);

