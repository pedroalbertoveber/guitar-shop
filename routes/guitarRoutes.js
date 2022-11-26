/* external modules */
const express = require("express");
const router = express.Router();

const GuitarController = require("../controllers/GuitarController");

router.get("/", GuitarController.getAll);
router.get("/add", GuitarController.addGuitar);
router.post("/add", GuitarController.addGuitarSave);
router.get("/:id", GuitarController.showGuitar);
router.get("/edit/:id", GuitarController.editGuitar);
router.post("/edit", GuitarController.editGuitarSave);
router.post("/delete", GuitarController.deleteGuitar);

module.exports = router;