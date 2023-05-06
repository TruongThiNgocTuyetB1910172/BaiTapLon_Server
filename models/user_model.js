const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: String,
  gender: String,
  email: String,
  password: String,

  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", postSchema);
