const { model, Schema } = require("mongoose");

const dataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
});

module.exports = model("user", dataSchema);