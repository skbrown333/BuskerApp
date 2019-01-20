const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");
const fs = require("fs");
const https = require("https");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/node-demo");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://busk.io:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use("/", routes);

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(3007);
