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
  lat: { type: Number },
  lng: { type: Number },
  address: { type: String },
  is_active: { type: Boolean, default: false },
  account_type: { type: String, required: true },
  hash: { type: String, required: true }
});

module.exports = mongoose.model("Account", Account);
