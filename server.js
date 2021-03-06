const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4000;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds347367.mlab.com:47367/heroku_tpt63jk7";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useMongoClient: true }); 

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});