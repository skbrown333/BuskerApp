const routes = require("express").Router();
const AccountRouter = require("./Account");
const EventRouter = require("./Event");
const handleError = require("../utils/utils").handleError;

routes.use("/accounts", AccountRouter);
routes.use("/events", EventRouter);

routes.use(handleError);

module.exports = routes;
