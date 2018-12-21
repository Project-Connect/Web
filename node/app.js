const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
// Set up the express app
const app = express();

//post to listen to
app.set('port', 8000);

// Log requests to the console.
app.use(logger('dev'));
app.use(fileUpload());
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./server/routes')(app);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.get('/public/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
