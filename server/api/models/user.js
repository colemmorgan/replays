const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  epicId: String,
  epicUsername: String,
  games: [{
    gameId: String,
    date: String,
    lengthInMs: String,
    place: Number,
    eliminations: Number
  }]
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
