const FindItemById = require("../../models/Database.model");

async function httpSearchItem(req, res) {
  const itemsId = Number(req.params.id);
  try {
    const itemobj = await FindItemById(itemsId);
    res.status(200).json(itemobj);
  } catch (err) {
    res.status(400).json({
      err: "not benig catched",
    });
  }
}
module.exports = httpSearchItem;
