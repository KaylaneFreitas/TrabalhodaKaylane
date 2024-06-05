const db = require("../models");
const Registros = db.registros;
const Op = db.Sequelize.Op;

// Cria e salva um novo enfermeiro
exports.create = (req, res) => {
};

// Retorna todos os enfermeiros do banco de dados. Podemos passar um parâmetro e
//filtrar
exports.findAll = (req, res) => {
};

// Encontra uma enfermeiro pelo id
exports.findOne = (req, res) => {
};

// Atualiza os dados de um enfermeiro
exports.update = (req, res) => {
};

// Deleta um enfermeiro pelo id
exports.delete = (req, res) => {
};

// Deleta todos os enfermeiros do banco de dados
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
    // Criar um enfermeiro
    const enfermeiro = {
    nome: req.body.nome,
    idade: req.body.idade,
    tipoSanguineo: req.body.tipoSanguineo,
    formacao: req.body.formacao,
    cargaHoraria: req.body.cargaHoraria,
    cpf: req.body.cargaHoraria,
    };
}
