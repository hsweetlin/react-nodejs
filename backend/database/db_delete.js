var mysql = require('mysql');
var config = require('../config');
console.log(config);


var con = mysql.createConnection({
  host: config.database.host,
  user: config.database.username,
  password: config.database.password,
  database: config.database.db
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM personal_details";
 
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(fields[0]);
  });
  });