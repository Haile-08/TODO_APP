function httpUpdateItem(req, res) {
  return res.status(200).json({ name: "updated item" });
}

module.exports = httpUpdateItem;
