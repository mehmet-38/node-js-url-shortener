const express = require("express");

const routers = require("./routers");
const app = express();

app.use("/urls", routers.urlRoute);

app.use((req, res, next) => {
  res.send("404 NOT FOUND");
  next();
});

module.exports = app;
