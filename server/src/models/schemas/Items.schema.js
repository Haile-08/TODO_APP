const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  body: String,
});

const ItemsModel = mongoose.model("Items", ItemSchema);

module.exports = ItemsModel;
