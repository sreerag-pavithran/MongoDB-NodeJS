const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/hotel")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Found an error"));

const hotelSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  room: {
    type: Number,
    min: 200,
    max: 600,
  },
  checkin: Date,
  checkout: Date,
  isForeign: Boolean,
});

const Hotel = mongoose.model("Hotel", hotelSchema);
