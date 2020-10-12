const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const subscribersRouter = require('./routes/subscribers.router');
const app = express();
const mongoose = require('mongoose')

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

//mongodb stuff
const uri = "mongodb+srv://dbUser:dbUserPassword@cluster0.k7dtj.mongodb.net/Cluster0?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/subscribers', subscribersRouter);

module.exports = app;
