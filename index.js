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

