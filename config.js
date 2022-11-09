const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "178.33.183.155",
    user: "demo",
    password: "demo",
    database: "demo",
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
});
module.exports = connection;
