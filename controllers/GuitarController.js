const Guitar = require("../models/Guitar");

module.exports = class GuitarController {
  static async getAll(req, res) {
    const guitars = await Guitar.find().lean();

    res.render("guitars/home", { guitars });
  }

  static addGuitar(req, res) {
    res.render("guitars/add");
  }

  static async addGuitarSave(req, res) {
    const guitar = req.body.guitar;
    const brand = req.body.brand;
    const year = req.body.year;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;
 
    const newGuitar = new Guitar({ guitar, brand, year, image, price, description });
    await newGuitar.save();

    res.redirect("/");
  }

  static async showGuitar(req, res) {
    const id = req.params.id;

    const guitar = await Guitar.findById(id).lean();
    res.render("guitars/details", { guitar });
  }

  static async editGuitar(req, res) {
    const id = req.params.id;

    const guitar = await Guitar.findById(id).lean();
    res.render("guitars/edit", { guitar });
  }

  static async editGuitarSave(req, res) {
    const guitar = req.body.guitar;
    const brand = req.body.brand;
    const year = req.body.year;
    const image = req.body.image;
    const price = req.body.price;
    const description = req.body.description;
    const id = req.body.id;

    const updatedGuitar = { guitar, brand, year, image, price, description };
    await Guitar.updateOne({ _id: id }, updatedGuitar );

    res.redirect("/");
  }

  static async deleteGuitar(req, res) {
    const id = req.body.id;

    await Guitar.deleteOne({ _id: id });
    res.redirect("/");
  }
}