'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AdSchema = new Schema({
  name: String,
  title: String,
  date: { type: Date, default: Date.now },
  type: String,
  photo: String,
  cp: String,
  description: String,
  active: Boolean,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Ad', AdSchema);