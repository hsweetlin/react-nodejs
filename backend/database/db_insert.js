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
  // var sql = "INSERT INTO personal_details (name, education, address) VALUES ?";
  var sql = "INSERT INTO relatives_details (relative_name, relationship, occupation, reg_no) VALUES ?";
  var values = [
    // ['John', 'Brother', 'software Engineer', '12'],
    ['Juli', 'Sister', 'Trainee Software Engineer', '10']
  ]
  // var values = [
  //   ['John', 'BSc', 'Highway 71'],
  //   ['Peter','BSc', 'Lowstreet 4'],
  //   ['Amy', 'BSc','Apple st 652'],
  //   ['Hannah','BSc', 'Mountain 21'],
  //   ['Michael','BSc', 'Valley 345'],
  //   ['Sandy', 'BE', 'Ocean blvd 2'],
  //   ['Betty','BSc', 'Green Grass 1'],
  //   ['Richard', 'BE', 'Sky st 331'],
  //   ['Susan', 'BE',  'One way 98'],
  //   ['Vicky', 'BSc','Yellow Garden 2'],
  //   ['Ben', 'BE', 'Park Lane 38'],
  //   ['William', 'BE',  'Central st 954'],
  //   ['Chuck', 'BE', 'Main Road 989'],
  //   ['Viola','BSc', 'Sideway 1633']
  // ];

  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
  });