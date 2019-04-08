const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport"); // Authentication module

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Mongo API setup
// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://jay:jaylewis1@ds147225.mlab.com:47225/roughrecorder";
// var mLab = require("mongolab-data-api")("veRBjMo5NbM5--yKMr1RIslAzJvgS5th");

// const assert = require("assert");
// const dbName = "roughrecorder";

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Connect to MongoDB
// MongoClient.connect(url, function(err, client) {
//   useNewUrlParser: true;
//   assert.equal(null, err);
//   console.log("MongoDB connected");

//   const db = client.db(dbName);

//   client.close();
// });

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// User routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
