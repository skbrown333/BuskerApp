const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

app.use(bodyParser.json());
app.use("/", routes);

app.listen(3000);
