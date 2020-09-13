var express = require('express');
var route = require('./controllers/route');


var serve = express();

//set templating engine
var ejs = require('ejs');
ejs.delimiter = '?';
serve.set('view engine', 'ejs');

//static files
serve.use(express.static('./public'));

//fire controllers
route(serve);

//listen to port
serve.listen('404');
console.log(new Date() + ': server is running on port 404');