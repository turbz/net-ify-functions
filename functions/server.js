"use-strict";

const express = require("express");
const serverless = require("serverless-http");
const app = express();

const testRoutes = require("./services/routes/testRoutes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/.netlify/functions/server", testRoutes); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
