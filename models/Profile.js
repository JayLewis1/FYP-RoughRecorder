const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  handle: {
    type: String,
    reduired: true,
    max: 40 // Max 40 characters
  },
  location: {
    type: String
  },
  instrument: {
    // User enters list of instruments which will create an array
    type: [String],
    required: true
  },
  expertise: {
    // Selection of novice, beginner, etc
    type: String,
    required: true
  },
  genre: {
    type: String
  },
  bio: {
    type: String
  },
  social: {
    youtube: {
      type: String
    },
    facebook: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    },
    soundcloud: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
