/* external modules */
const mongoose = require("mongoose");
const { Schema } = mongoose;

const Guitar = mongoose.model(
  "Guitar",
  new Schema ({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  }),
);

module.exports = Guitar;