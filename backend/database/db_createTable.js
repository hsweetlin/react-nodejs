var mysql = require('mysql');
var config = require('../config');
console.log(config);


var con = mysql.createConnection({
  host: config.database.host,
  user: config.database.username,
  password: config.database.password,
  database: config.database.db
});

con.connect(function(err,result){
    if(err) console.log(err);
    console.log('connected')
    var sql = 'ALTER TABLE personal_details ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY'
    con.query(sql, function(err,result){
       if(err) console.log(err);
        console.log('Table Created');
    })
})