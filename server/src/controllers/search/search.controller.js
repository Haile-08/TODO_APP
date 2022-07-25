function httpSearchItem(req, res) {
  return res.status(200).json({ name: "seached item" });
}
module.exports = httpSearchItem;
