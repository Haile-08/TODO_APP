const express = require("express");

const searchitem = require("./search/search.router");
const AddNewRouter = require("./add/add.router");
const viewRouter = require("./view/view.router");
const searchRouter = require("./delete/delete.router");

const api = express.Router();

api.use("/search", searchitem);
api.use("/view", viewRouter);
api.use("/delete", searchRouter);
api.use("/add", AddNewRouter);

module.exports = api;
