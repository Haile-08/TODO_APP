const Items = require("../../models/Items.schema");

async function httpViewItem(req, res) {
  try {
    const items = await Items.find({});
    console.log(items);
    res.status(200).json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = httpViewItem;
