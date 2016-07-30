var express = require('express');
var app = express();
var mysql = require('mysql');
var questions;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'friendFinder'
});

connection.connect();

connection.query('SELECT * FROM questions', function(err, rows, fields) {
    if (err) throw err;
    console.log(rows);
    questions = rows;
});

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/survey', function(req, res) {
    res.render('survey', { q: questions });
});

var port = 3000;
app.listen(port, function(req, res) {
    console.log('listening on port: ' + port)
});
