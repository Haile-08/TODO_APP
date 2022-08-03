const Items = require("../../models/Items.schema");

async function httpUpdateController(req, res) {
  const { id } = req.params;

  try {
    const update = await Items.findOneAndUpdate(
      { id: `${id}` },
      {
        ...req.body,
      }
    );
    if (!update) {
      return res.status(400).json({ err: "no such item" });
    }

    res.status(200).json(update);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

module.exports = httpUpdateController;
