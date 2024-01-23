var mysql = require('mysql');
var config = require('../config');
console.log(config);


var con = mysql.createConnection({
  host: config.database.host,
  user: config.database.username,
  password: config.database.password
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(`CREATE DATABASE ${config.database.db}`, function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });