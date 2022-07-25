function httpViewItem(req, res) {
  try {
    return res.status(200).json({ name: "haile" });
  } catch (err) {
    res.status(400).json({ error: err });
  }
}

module.exports = httpViewItem;
