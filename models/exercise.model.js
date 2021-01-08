const mongoose = require('mongoose');

// use schema
const Schema = mongoose.Schema;

// create new schema
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

// create model wt name Exercise
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;