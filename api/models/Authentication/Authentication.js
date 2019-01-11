const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Account = new Schema({
  account: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Account"
  },
  password: { type: String, required: true }
});

module.exports = mongoose.model("Account", Account);
