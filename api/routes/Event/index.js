const routes = require("express").Router();
const EventController = require("./EventController");

routes.post("/create", EventController.create);
routes.get("/", EventController.getAll);
routes.get("/:id", EventController.getById);

module.exports = routes;
