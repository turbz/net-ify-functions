"use-strict";

const express = require("express");
const serverless = require("serverless-http");
const app = express();

const router = express.Router();
router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});

router.get("/hello", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1> From another route");
  res.end();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/.netlify/functions/server", router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);

// exports.handler = function (event, context, callback) {
//   callback(null, {
//     statusCode: 200,
//     body: "hello World",
//   });
// };
