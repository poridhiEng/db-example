const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "testdb",
  password: "example",
});

// read
connection.query("SELECT * FROM user", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  //   console.log(fields); // fields contains extra meta data about results, if available
  connection.end();
});

// // create
// connection.query(
//   "INSERT INTO user (name) values ('nodejs name')",
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     //   console.log(fields); // fields contains extra meta data about results, if available
//     connection.end();
//   }
// );
