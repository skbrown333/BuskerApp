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

let Event = new Schema(
  {
    account: {
      type: Schema.Types.ObjectId,
      required: true
    },
    name: { type: String, required: true },
    description: { type: String, required: true },
    love: { type: Number, default: 0 },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    address: { type: String, required: true },
    start_time: { type: String, required: true },
    end_time: { type: String, required: true }
  },
  schemaOptions
);

Event.virtual("img").get(function() {
  return "https://s3.amazonaws.com/photos.priestly.app/" + this._id + ".png";
});

module.exports = mongoose.model("Event", Event);
