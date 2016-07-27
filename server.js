var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
    res.render('index', lunches[0]);
});

var port = 3000;
app.listen(port);