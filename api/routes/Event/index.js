const routes = require("express").Router();
const EventController = require("./EventController");

let Controller = new EventController();

routes.post("/create", Controller.create);
routes.get("/", Controller.getAll);
routes.get("/:id", Controller.getById);

module.exports = routes;
