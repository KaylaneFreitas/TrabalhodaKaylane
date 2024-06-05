const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
origin:
"Aqui informamos quais urls permitimos"
};
app.use(cors(corsOptions));
//parser de requisições com content type - application/json
app.use(express.json());
//parser de requisições com content type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize
.sync({ alter: true })
.then(() => {
console.log("Synced db.");
})
.catch((err) => {
console.log("Failed to sync db: " + err.message);
});

require("./routes/doador.route")(app);
require("./routes/enfermeiro.route")(app);
require("./routes/registros.route")(app);

app.listen(8000, function (req, res) {
  console.log("App rodando na porta 8000");
});
