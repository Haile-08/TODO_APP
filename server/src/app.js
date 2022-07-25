const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

const api = require("./routes/api");

const app = express();

mongoose
  .connect(
    "mongodb+srv://h:icuicb4u@todoapp.kpinky4.mongodb.net/TODOAPP?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((res) => console.log("connected to database"))
  .catch((err) => console.log(err));

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());

app.use("/v1", api);

module.exports = app;
