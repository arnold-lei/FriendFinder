var express = require('express');
var app = express();
var mysql = require('mysql');
var questions;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'friendFinder'
});
 
connection.connect();
 
connection.query('SELECT * FROM questions', function(err, rows, fields) {
	if (err) throw err;
	console.log(rows);
	questions = rows;
});
var tables = [ 
	{ 
		id: 1,
    	question: 'Your mind is always buzzing with unexplored ideas and plans.' 
    },
  	{ 
  		id: 2,
    	question: 'Generally speaking, you rely more on your experience than your imagination.' 
    },
  { 
  		id: 3,
    	question: 'You find it easy to stay relaxed and focused even when there is some pressure.' 
    },
  { 
  		id: 4,
    	question: 'You rarely do something just out of sheer curiosity.' },
  { 
  		id: 5, 
  		question: 'People can rarely upset you.' },
  { id: 6,
    question: 'It is often difficult for you to relate to other people’s feelings.' },
  { id: 7,
    question: 'In a discussion, truth should be more important than people’s sensitivities.' },
  { id: 8,
    question: 'You rarely get carried away by fantasies and ideas.' },
  { id: 9,
    question: 'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.' },
  { id: 10,
    question: 'You feel more energetic after spending time with a group of people.' } ]

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
    res.render('survey', {q: questions});
});

var port = 3000;
app.listen(port);