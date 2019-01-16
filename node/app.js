const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session')
// Set up the express app
const app = express();

//post to listen to
app.set('port', 8000);

//for development servers only
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);

// Log requests to the console.
app.use(logger('dev'));
app.use(fileUpload());

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add express sesssion middleware
app.use(session({
	secret: 'oursecret',
	resave: false,
	saveUninitialized: false,
	cookie: {
		expires: 1800000, // 30 mins
		httpOnly: true
	}
}));

// Serve the static files from the React app
app.use('/resource', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

// Require our routes into the application.
require('./server/routes')(app);

app.get(/.*/, (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});
module.exports = app;
