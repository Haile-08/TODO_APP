const express = require("express");

const httpAddNewItem = require("../../controllers/add/add.controller");
const AddNewRouter = express.Router();

AddNewRouter.post("/", httpAddNewItem);

module.exports = AddNewRouter;
