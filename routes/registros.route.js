module.exports = (app) => {
const registros = require("../controllers/registros.controller.js" );
var router = require("express").Router();
// Rota para criar um registro
router.post("/", registros.create);
// Rota que retorna todos os registros
router.get("/", registros.findAll);
// Rota que retorna um registro pelo numero
router.get("/:Numero", registros.findOne);
// Rota que atualiza um registro pelo numero
router.put("/:Numero", registros.update);
// Rota para deletar um registro pelo numero
router.delete("/:Numero", numero.delete);
// Rota para deletar todos os registros
router.delete("/", registros.deleteAll);
// A linha abaixo informa que todas essas rotas são encontradas após o /registros. Isto é, localhost:8080/registros/rota
app.use("/registros", router);
};
