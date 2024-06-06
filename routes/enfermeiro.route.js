module.exports = (app) => {
const enfermeiro = require("../controllers/enfermeiro.controller.js" );
var router = require("express").Router();
// Rota para criar um enfermeiro
router.post("/", enfermeiro.create);
// Rota que retorna todos os enfermeiros
router.get("/", enfermeiro.findAll);
// Rota que retorna um enfermeiro pelo id
router.get("/:id", enfermeiro.findOne);
// Rota que atualiza um enfermeiro pelo id
router.put("/:id", enfermeiro.update);
// Rota para deletar um enfermeiro pelo id
router.delete("/:id", enfermeiro.delete);
// Rota para deletar todos os enfermeiros
router.delete("/", enfermeiro.deleteAll);
// A linha abaixo informa que todas essas rotas são encontradas após o /enfermeiro. Isto é, localhost:8080/enfermeiro/rota
app.use("/enfermeiro", router);
};
