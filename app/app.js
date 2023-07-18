require('dotenv').config('../.env');
const express = require('express');
const app = express();
const {errorHandler,notFoundHandler } = require('./error')


app.use(require('./midlleware'));
app.use(require('./router'));

app.use(notFoundHandler)

app.use(errorHandler)


module.exports = app;