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
  database: DB_NAME || "resolutions3",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  
  let sql =
  `DROP TABLE if exists days; CREATE TABLE days(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, day VARCHAR(15) not null); DROP TABLE if exists resolutions; CREATE TABLE resolutions(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, day_id INT NOT NULL, FOREIGN KEY (day_id) REFERENCES days(id), text VARCHAR(150), complete BOOLEAN)`;
  
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Tables created successfully!");

    console.log("Closing...");
  });

  con.end();
});


