const routes = require("express").Router();
const AccountController = require("./AccountController");

routes.post("/create", AccountController.create);
routes.post("/login", AccountController.authorize);
routes.get("/token", AccountController.getFromToken);
routes.get("/", AccountController.getAll);
routes.get("/:id", AccountController.getById);

module.exports = routes;
