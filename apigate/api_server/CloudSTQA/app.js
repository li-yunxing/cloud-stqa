var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var fs = require('fs');  

var index = require('./routes/index');
var users = require('./routes/users');
var testPageAccess = require('./routes/testPageAccess');
var testPageSleep = require('./routes/testPageSleep');
var testPageTimeOut = require('./routes/testPageTimeOut');
var ModifyHeaders = require('./routes/ModifyHeaders');
var MockResponse = require('./routes/MockResponse');
var param = require('./routes/param');
var cookie_info = require('./routes/cookie_info');
var client_info = require('./routes/client_info');
var URLRewrite = require('./routes/URLRewrite');
var fileUpload = require('./routes/fileUpload');
var ServerRes = require('./routes/ServerRes');
var ServerCra = require('./routes/ServerCra');
var ResBiggerBody = require('./routes/ResBiggerBody');
var BodyType = require('./routes/BodyType');

var app = express();

app.set('port', process.env.PORT || 7700);
app.set('httpsPort', process.env.PORT || 7800);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//------------Test Server API development-----------
//Test Page access
app.use('/access/testPage/try', testPageAccess);

//Test Page Sleep for 5 seconds
app.use('/access/testPage/sleep', testPageSleep);

//Test Page time out
app.use('/access/testPage/timeOut', testPageTimeOut);

//Obtain Parameter with GET/POST method 
app.use('/access/%7Bparam%7D', param);

//Test Send cookie
app.use('/access/cookie', cookie_info);

//Test Send Client info
app.use('/access/clientInfo', client_info);

//File Upload
app.use('/fileUpload', fileUpload);

//Test Server Response with not 200
app.use('/ServerRes', ServerRes);

//Test Server Crash 
app.use('/ServerCra', ServerCra);

//Test Server Response with bigger body 
app.use('/ResBiggerBody', ResBiggerBody);

//Test Body Type
app.use('/Body', BodyType);

//Test Modify Headers
app.use('/ModifyHeaders', ModifyHeaders);

//Test Mock Response
app.use('/MockResponse', MockResponse);

//URL Rewrite - Pattern 1
app.use('/access/testPage/URLRewrite', URLRewrite);

//URL Rewrite - Pattern 2
app.use('/access2/testPage2/012MTx7HSR1BScKL/try', testPageAccess);
app.use('/access2/testPage2/U9s5p8tPIS2Q44g8/try', URLRewrite);
app.use('/access2/012MTx7HSR1BScKL/try', URLRewrite);

//Test URL Pattern
app.use('/access2/012MTx7HSR1BScKL/tre', testPageAccess);
app.use('/access2/012MTx7HSR1BScKL/other', URLRewrite);
app.use('/test/apigw/avg', testPageAccess);
app.use('/test/cloud/stqa/avg', URLRewrite);

//--------------------------------------------------

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

http.createServer(app).listen(app.get('port'), function(){
	  console.log('Express server listening on port ' + app.get('port'));
	});

//Create HTTPS server
var options = {  
	  key: fs.readFileSync('./ssl/server.key'),  
      cert: fs.readFileSync('./ssl/server.crt')  
    };  

https.createServer(options,app).listen(app.get('httpsPort'), function(){
	  console.log('Express server listening on port ' + app.get('httpsPort'));
	});

module.exports = app;
