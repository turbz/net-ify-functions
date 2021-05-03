const express = require("express");
const { homePage, getHello } = require("../controllers/testControllers");

const router = express.Router();

router.get("/", homePage);

router.get("/hello", getHello);

module.exports = router;
