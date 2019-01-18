const routes = require("express").Router();
const AccountRouter = require("./Account");
const EventRouter = require("./Event");

routes.use("/accounts", AccountRouter);
routes.use("/events", EventRouter);

module.exports = routes;
