const { Schema, model } = require('mongoose');

const User = new Schema({
  // visible: {type:Boolean, require: true},
  password: { type: String, require: true },
  email: { type: String, require: true },
  mainInfo: {
    name: { type: String, default: '' },
    secondName: { type: String, default: '' },
    avatar: { type: String, default: '' },
    bithday: { type: String, default: '' },
    gender: { type: String, default: '' },
    phone: { type: String, default: '' },
    city: { type: String, default: '' },
    country: { type: String, default: '' },
  },

  skills: [{ type: String }],
  desiredPosition: { type: String },
  desiredPay: { type: Number },
  specializations: [{ type: String }],
  // workExperience: { type: String },
  // education: { type: String },
  // languages: [{ language: String }],
});

module.exports = model('User', User);
