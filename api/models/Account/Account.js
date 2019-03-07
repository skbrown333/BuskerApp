const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schemaOptions = {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
};

let Account = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    lat: { type: Number, default: null },
    lng: { type: Number, default: null },
    address: { type: String },
    is_active: { type: Boolean, default: false },
    account_type: { type: String, required: true, default: "normal" },
    hash: { type: String, required: true }
  },
  schemaOptions
);

Account.virtual("img").get(function() {
  return "https://s3.amazonaws.com/photos.priestly.app/" + this._id + ".png";
});

module.exports = mongoose.model("Account", Account);
