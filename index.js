/* external modules */
const express = require("express");
const exphbs = require("express-handlebars");
const GuitarController = require("./controllers/GuitarController");

const app = express();
const conn = require("./db/conn").run;

/* routes */
const guitarRoutes = require("./routes/guitarRoutes");

/* handlebars config */
app.engine("handlebars", exphbs.engine());

app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(express.urlencoded({
  extended: true,
}));

app.use(express.json());


app.use("/guitars", guitarRoutes);
app.get("/", GuitarController.getAll);
app.listen(3000);