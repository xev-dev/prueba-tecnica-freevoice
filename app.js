const express = require("express");
const app = express();
const connection = require("./config");
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', function(req, res, next) {
    const sql ='SELECT * FROM orders';
    connection.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('index', { title: 'Orders List', orderData: data});
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
