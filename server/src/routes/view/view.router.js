const express = require("express");

const httpViewItem = require("../../controllers/view/view.controller");

const viewRouter = express.Router();

viewRouter.get("/", httpViewItem);

module.exports = viewRouter;
