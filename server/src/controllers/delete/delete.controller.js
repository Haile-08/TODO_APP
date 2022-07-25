function httpDeleteItem(req, res) {
  return res.status(200).json({ name: "delete" });
}

module.exports = httpDeleteItem;
