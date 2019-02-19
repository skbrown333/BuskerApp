const routes = require("express").Router();
const AccountController = require("./AccountController");
const wrapAsync = require("../../utils/utils").wrapAsync;

let Controller = new AccountController();

routes.post("/create", wrapAsync(Controller.create));
routes.post("/login", wrapAsync(Controller.authorize));
routes.post("/token", wrapAsync(Controller.getFromToken));
routes.get("/", wrapAsync(Controller.getAll));
routes.get("/:id", wrapAsync(Controller.getById));
routes.get("/:id/photo", wrapAsync(Controller.getPhoto));

module.exports = routes;
