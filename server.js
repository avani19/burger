var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var routes = require('./controllers/burgers_controller.js');
var exphbs = require('express-handlebars');
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use('/', routes);

var port = 3000;
app.listen(port);