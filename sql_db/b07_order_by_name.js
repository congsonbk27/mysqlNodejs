var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "sondb"
});

//output data and sort by name
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });