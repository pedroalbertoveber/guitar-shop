/* external modules */
const express = require("express");
const router = express.Router();

const GuitarController = require("../controllers/GuitarController");

router.get("/", GuitarController.getAll);

module.exports = router;