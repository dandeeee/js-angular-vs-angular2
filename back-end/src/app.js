/*jshint node:true*/
'use strict';

var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var compress     = require('compression');
var logger       = require('morgan');
var port         = process.env.PORT || 7222;
var routes;

var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(compress());            // Compress response data with gzip
app.use(logger('dev'));

routes = require('./routes/items')(app);

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

var source = '';

//app.configure(function(){
//    app.use(express.bodyParser());
//    app.use(app.router);
//    app.use(cors({origin:"*"}));
//});

//console.log('** DEV **');
//app.use('/', express.static('./src/client'));
//app.use('/', express.static('./'));

//app.all("/api/*", function (req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
//    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//    return next();
//});

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
        '\n__dirname = ' + __dirname  +
        '\nprocess.cwd = ' + process.cwd());
});