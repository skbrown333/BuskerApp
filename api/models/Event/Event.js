const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Event = new Schema({
  account: {
    type: Schema.Types.ObjectId,
    required: true
  },
  name: String,
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  time: String
});

module.exports = mongoose.model("Event", Event);
