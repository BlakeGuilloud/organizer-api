const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./lib/routes/user.routes');
const devEnv = require('./env.config');

const db = process.env.MONGODB_URI || devEnv.MONGODB_URI || 'mongodb://localhost/testing';
const port = process.env.PORT || 8100;

mongoose.Promise = global.Promise;

mongoose.connect(db);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(port, () => console.log('app listening on port: ', port));