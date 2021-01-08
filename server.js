const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up your db, connect with mongoose using uri key
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true });

// open the connection
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// create paths using express router
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// use the paths
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res){
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  })
};

app.listen( PORT, error => {
  if (error) throw error;
  console.log(`Server is running on port ${PORT}`);
})