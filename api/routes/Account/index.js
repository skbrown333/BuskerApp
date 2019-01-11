const routes = require("express").Router();
const AccountController = require("./AccountController");

routes.post("/create", AccountController.create);
routes.get("/", AccountController.getAll);
routes.get("/:id", AccountController.getById);

module.exports = routes;
