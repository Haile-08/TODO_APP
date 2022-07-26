const express = require("express");

const httpDeleteItem = require("../../controllers/delete/delete.controller");

const deleteRouter = express.Router();

deleteRouter.delete("/:id", httpDeleteItem);

module.exports = deleteRouter;
