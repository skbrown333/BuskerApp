const routes = require("express").Router();
const AccountRouter = require("./Account");

routes.use("/accounts", AccountRouter);

module.exports = routes;
