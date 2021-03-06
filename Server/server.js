const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// Route includes
const exerciseRouter = require("./routes/exercise.router");
const bodyweightRouter = require("./routes/bodyweight.router");


/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use("/api/exercise", exerciseRouter);
app.use("/api/bodyweight", bodyweightRouter);

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
  console.log('Listening on port: ', port);
});