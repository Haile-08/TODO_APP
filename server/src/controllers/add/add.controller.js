const { AddNewItem } = require("../../models/Database.model");

async function httpAddNewItem(req, res) {
  const items = req.body;

  if (!items.id || !items.title || !items.body) {
    return res.status(400).json({
      error: "missing data",
    });
  }
  await AddNewItem(items);
  return res.status(201).json(items);
}

module.exports = httpAddNewItem;
