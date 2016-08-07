var app                 = require('express')();
var bodyParser          = require('body-parser');
var mongoose            = require('mongoose');
var dbName              = 'bookOfDragons';
var dbUrl               = 'mongodb://mongo:27017/'+dbName;

module.exports = app; // for testing

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var config = {
  appRoot: __dirname // required config
};

/****************
Activating Mongoose
*****************/

mongoose.connect(dbUrl);
var db                  = mongoose.connection;
db.on('error', function(error){
    console.log('Error in Connecting to DB');
});
db.once('open', function (callback) {
  console.log('Connected to DB');
});


/****************
Activating Express Server
*****************/
var server              = app.listen(3005, function () {
  var host              = server.address().address;
  var port              = server.address().port;
  console.log('Magic Happens on http://localhost:3005');
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./api/config/routes')(app);
// SwaggerExpress.create(config, function(err, swaggerExpress) {
//   if (err) { throw err; }
//
//   // install middleware
//   swaggerExpress.register(app);
//
//   var port = process.env.PORT || 10010;
//   app.listen(port);
//
//   if (swaggerExpress.runner.swagger.paths['/hello']) {
//     console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
//   }
// });
