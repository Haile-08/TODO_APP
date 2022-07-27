const express = require("express");
const httpUpdateController = require("../../controllers/update/update.controller");

const UpdateRouter = express.Router();

UpdateRouter.use("/:id", httpUpdateController);

module.exports = UpdateRouter;
