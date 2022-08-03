const Items = require("../../models/Items.schema");

async function httpAddNewItem(req, res) {
  const { id, title, body } = req.body;

  try {
    if (!id || !title || !body) {
      return res.status(400).json({
        error: "missing data",
      });
    }
    const items = await Items.create({ id, title, body });
    return res.status(201).json(items);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

module.exports = httpAddNewItem;
