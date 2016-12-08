'use strict';
const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');

const app         = express();
const PORT        = process.argv[2] || process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());

app.listen(PORT, () => console.log('server here! listening on', PORT));

app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('Something brokeded!');
});
