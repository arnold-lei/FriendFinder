var express = require('express');
var app = express();
var mysql = require('mysql');

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('index');
});

var port = 3000;
app.listen(port);