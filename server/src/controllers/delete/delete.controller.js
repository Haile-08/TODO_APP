const Items = require("../../models/Items.schema");

async function httpDeleteItem(req, res) {
  let { id } = req.params;
  try {
    const item = await Items.findOneAndDelete({ id: `${id}` });

    if (!item) {
      return res.status(400).json({ err: "no such item" });
    }

    return res.status(200).json(item);
  } catch (err) {
    return res.status(400).json({ err: "no such file" });
  }
}

module.exports = httpDeleteItem;
