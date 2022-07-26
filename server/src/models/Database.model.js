const mongoose = require("mongoose");
const Item = require("./schemas/Items.schema");

const DEFAULT_ID_NUMBER = 1;

async function AddNewItem(items) {
  const itemo = await Item.create(items);
}

async function FindItemById(id) {
  const item = await Item.find({ id: id });
  return item;
}
async function UpdateItemById(body) {
  Item.updateOne(body);
}
module.exports = {
  AddNewItem,
  FindItemById,
  UpdateItemById,
};