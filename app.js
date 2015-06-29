var express = require('express');
var app = express();
var logger = require('morgan');
var ejs_locals = require('ejs-locals');
var path = require('path');
var app_server = require('app-server');

app.use(logger('dev'));
app.set('port', process.env.PORT || 3000);
app.set('views', path.join( __dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', ejs_locals);

var app_dir = 'lib';
var mount_path = '/apps';

app = module.exports = app_server(app, app_dir, mount_path);

var server = app.listen(app.get('port'), function() {
  console.log('Starting AppServer - Listening on port ' + server.address().port);
});
