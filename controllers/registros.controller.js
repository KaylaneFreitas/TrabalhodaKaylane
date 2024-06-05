const db = require("../models");
const registros = db.registros;
const Op = db.Sequelize.Op;

// Cria e salva um novo registro
exports.create = (req, res) => {
};

// Retorna todos os registros do banco de dados. Podemos passar um parâmetro e
//filtrar
exports.findAll = (req, res) => {
};

// Encontra uma doação pelo id
exports.findOne = (req, res) => {
};

// Atualiza os dados de um registro
exports.update = (req, res) => {
};

// Deleta uma doação pelo id
exports.delete = (req, res) => {
};

// Deleta todas as doações do banco de dados
exports.deleteAll = (req, res) => {
};

exports.create = (req, res) => {
    // Validar requisição. Aqui verificamos se algum parâmetro está vazio
    if (!req.body.nome) {
    res.status(400).send({
    message: "Conteúdo não pode estar vazio!" ,
    });
    return;
    }
    // Criar um registro
    const registro = {
    QuantidadeDoada: req.body.QuantidadeDoada,
    Tipo: req.body.Tipo,
    doadorId: req.body.doadorId,
    enfermeiroId: req.body.enfermeiroId,
    };
}
