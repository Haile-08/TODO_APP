const { UpdateItemById } = require("../../models/Database.model");

function httpUpdateController(req, res) {
  const body = req.body;
  UpdateItemById(body);
  res.status(200).json({ name: "success" });
}

module.exports = httpUpdateController;
