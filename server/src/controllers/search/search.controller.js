const Items = require("../../models/Items.schema");

async function httpSearchItem(req, res) {
  const { id } = req.params;
  try {
    const itemobj = await Items.find({ id: `${id}` });
    res.status(200).json(itemobj);
  } catch (err) {
    res.status(400).json({
      err: err.message,
    });
  }
}
module.exports = httpSearchItem;
