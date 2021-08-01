const { Schema, model } = require('mongoose');

const User = new Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  phone: { type: Number, require: false, defaultValue: '' },
  mainInfo: [{ city: String, country: String }],
  position: { type: String },
  workExperience: { type: String },
  skills: [{ skill: String }],
  education: { type: String },
  languages: [{ language: String }],
});

module.exports = model('User', User);
