const { Schema, model } = require('mongoose');

const Favorite = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  list: [{ work: String }],
});

module.exports = model('Favorite', Favorite);
