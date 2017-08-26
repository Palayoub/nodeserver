const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Settin up express
var app = express();
//Conncetion to mongoose
mongoose.connect('mongodb://127.0.0.1:27017/test');
var db = mongoose.connection;
//Routes
app.use('/api', require('./routes/api'));
app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/weather'));

app.listen(8000);
console.log('Running on port 8000... ');
