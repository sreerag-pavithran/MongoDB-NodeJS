const { model, Schema } = require("mongoose");

let userSchema = new Schema({
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

module.exports = model("User", userSchema);