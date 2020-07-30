const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const STATIC_DIR = path.resolve(__dirname, "..", "public");

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//Static files
app.use(app.static(STATIC_DIR));

module.exports = app;