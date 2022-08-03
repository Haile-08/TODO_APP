const express = require("express");
const httpUpdateController = require("../../controllers/update/update.controller");

const UpdateRouter = express.Router();

UpdateRouter.patch("/:id", httpUpdateController);

module.exports = UpdateRouter;
