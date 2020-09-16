const mongoose = require("mongoose");

// declare schema
const Schema = mongoose.Schema;
// declare model schema
const userSchema = new Schema(
  {
      name: { type: String, default: null },
      username: {type: String, required: true },
      email: { type: String, default: null },
      password: { type: String, required: true }
  },
  {
    timestamps: true,
  }
);

//export mongoose model
module.exports = mongoose.model('users', userSchema);