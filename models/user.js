const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { Schema } = mongoose.Schema  this is a destructuring

const userSchema = new Schema({
  googleId: String,
});

mongoose.model("users", userSchema);
