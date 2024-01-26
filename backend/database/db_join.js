var mysql = require('mysql');
var config = require('../config');
console.log(config);


var con = mysql.createConnection({
  host: config.database.host,
  user: config.database.username,
  password: config.database.password,
  database: config.database.db
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT personal_details.name as user, relatives_details.occupation as occupation from personal_details JOIN relatives_details on personal_details.reg_no= relatives_details.reg_no"
  var sql = "SELECT personal_details.name as user, relatives_details.occupation as occupation from personal_details left JOIN relatives_details on personal_details.reg_no= relatives_details.reg_no"
  var sql = "SELECT personal_details.name as user, relatives_details.occupation as occupation from personal_details right JOIN relatives_details on personal_details.reg_no= relatives_details.reg_no"

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});