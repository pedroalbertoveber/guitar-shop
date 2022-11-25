const Guitar = require("../models/Guitar");

module.exports = class GuitarController {
  static async getAll(req, res) {
    res.render("guitars/home");
  }
}