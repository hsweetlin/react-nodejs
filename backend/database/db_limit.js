var mysql = require('mysql');
var config = require('../config');



var con = mysql.createConnection({
  host: config.database.host,
  user: config.database.username,
  password: config.database.password,
  database: config.database.db
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT * FROM personal_details LIMIT 5";
//   var sql = "SELECT * FROM personal_details LIMIT 5 OFFSET 2";              //"OFFSET 2", means starting from the third position, not the second!
// var sql = "SELECT * FROM personal_details LIMIT 2, 5";            //The numbers are reversed: "LIMIT 2, 5" is the same as "LIMIT 5 OFFSET 2"

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
  });