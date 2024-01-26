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
  var sql = "DROP TABLE IF EXISTS personal_details";
 
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log('Table deleted');
  });
  });