module.exports = (app) => {
const Doador = require("../controllers/doador.controller.js" );
var router = require("express").Router();
// Rota para criar um doador
router.post("/", doador.create);
// Rota que retorna todos os doadores
router.get("/", doador.findAll);
// Rota que retorna um doador pelo id
router.get("/:id", doador.findOne);
// Rota que atualiza um doador pelo id
router.put("/:id", doador.update);
// Rota para deletar um doador pelo id
router.delete("/:id", doador.delete);
// Rota para deletar todos os doadores
router.delete("/", doador.deleteAll);
// A linha abaixo informa que todas essas rotas são encontradas após o /doador. Isto é, localhost:8080/doador/rota
app.use("/doador", router);
};
