const config = require("../config/db.config.js");

const Sequelize = require("sequelize");//requerindo o sequelize
const sequelize = new Sequelize(//instanciando o sequelize = instanciando um objeto
config.DB,
config.USER,
config.PASSWORD,
config
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.enfermeiro = require("./enfermeiro.model.js")(sequelize, Sequelize);
db.doador = require("./doador.model.js")(sequelize, Sequelize);
db.registros = require("./estoque.model.js")(sequelize, Sequelize);
db.doador.hasMany(db.registros)
db.registros.belongsTo(db.doador)
db.enfermeiro.hasMany(db.registros)
db.registros.belongsTo(db.enfermeiro)
module.exports = db;
