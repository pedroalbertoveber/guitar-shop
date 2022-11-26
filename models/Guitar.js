/* external modules */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const Guitar = mongoose.model(
  "Guitar",
  new Schema ({
    guitar: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  }),
);

module.exports = Guitar;