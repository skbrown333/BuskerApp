const routes = require("express").Router();
const EventController = require("./EventController");
const wrapAsync = require("../../utils/utils").wrapAsync;

let Controller = new EventController();

routes.post("/create", wrapAsync(Controller.create));
routes.get("/", wrapAsync(Controller.getAll));
routes.get("/:id", wrapAsync(Controller.getById));

module.exports = routes;
