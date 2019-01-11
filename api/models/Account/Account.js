const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Account = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  bio: String,
  instrument: String,
  location: String,
  is_active: { type: Boolean, default: false },
  rating: { type: Number }
});

module.exports = mongoose.model("Account", Account);
