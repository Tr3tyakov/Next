const { Schema, model } = require('mongoose');

const Work = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  email: { type: Schema.Types.ObjectId, ref: 'User' },
  phone: { type: Schema.Types.ObjectId, ref: 'User' },
  title: { type: String, require: true },
  company: { type: String },
  location: { type: String },
  salary: { type: Number },
  subTitle: { type: String },
  aboutWork: { type: String },
  typeWork: { type: String },
  skills: [{ skill: String }],
  date: { type: Date, defaultValue: Date.now },
});

module.exports = model('Work', Work);
