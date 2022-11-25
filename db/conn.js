/* external modules */
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/guitarshop");
  console.log("Conectado ao banco de dados!");
}

main().catch(err => console.log("Error: ", err));

module.exports = mongoose;