require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "resolutions2",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  let sql =
    "DROP TABLE if exists dailyResolutions; CREATE TABLE dailyResolutions(id INT NOT NULL AUTO_INCREMENT, day VARCHAR(15) not null, description VARCHAR(150) not null)";
  
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Tables created successfully!");

    console.log("Closing...");
  });

  con.end();
});

//I COPIED AND PASTED WHAT WAS ABOVE TO CREATE THE WEEKLYRESOLUTIONS TABLE
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");

//   let sql =
//     "DROP TABLE if exists weeklyResolutions; CREATE TABLE weeklyResolutions(id INT NOT NULL AUTO_INCREMENT, title VARCHAR(40) not null, date DATE not null, day VARCHAR(20) not null, reward VARCHAR(200) not null, PRIMARY KEY (id));";
//   con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Table creation `weeklyResolutions` was successful!");

//     console.log("Closing...");
//   });

//   con.end();
// });

