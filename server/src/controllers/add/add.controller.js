function httpAddNewItem(req, res) {
  res.status(200).json({ name: "add new item" });
}

module.exports = httpAddNewItem;
