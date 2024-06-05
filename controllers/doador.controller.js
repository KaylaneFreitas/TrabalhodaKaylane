const db = require("../models");
const Registros = db.registros;
const Op = db.Sequelize.Op;

// Cria e salva um novo doador
exports.create = (req, res) => {
};

// Retorna todos os doadores do banco de dados. Podemos passar um parâmetro e
//filtrar
exports.findAll = (req, res) => {
};

// Encontra um doador pelo id
exports.findOne = (req, res) => {
};

// Atualiza os dados de um doador
exports.update = (req, res) => {
};

// Deleta um doador pelo id
exports.delete = (req, res) => {
};

// Deleta todos os doadores do banco de dados
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
    // Criar um doador
    const doador = {
    nome: req.body.nome,
    idade: req.body.idade,
    tipoSanguineo: req.body.tipoSanguineo,
    ocupacao: req.body.tipoSanguineo,
    historico: req.body.historico,
    cpf: req.body.cpf,
    };
}
