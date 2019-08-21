var express = require('express');
var mysql = require('mysql');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "csdl_son"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!")
});

con.connect(function (err) {
    if (err) throw err;
    var sql = "SELECT * FROM sinh_vien";
    con.query(sql, function (err, results) {
        if (err) throw err;
        console.log(results);
    })
});

app.listen(3000, function () {
    console.log('Node server running @ http://localhost:3000')
});