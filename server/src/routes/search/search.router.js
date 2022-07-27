const express = require("express");

const httpSearchItem = require("../../controllers/search/search.controller");

const searchRouter = express.Router();

searchRouter.get("/:id", httpSearchItem);

//search backend

module.exports = searchRouter;
