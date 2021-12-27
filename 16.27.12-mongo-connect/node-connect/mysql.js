var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});


con.connect(function(err) {
    if (err) throw err;
    con.query('SELECT * FROM school.grades', function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
      });
});