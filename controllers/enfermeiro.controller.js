const db = require("../models");
const Registros = db.registros;
const Op = db.Sequelize.Op;

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
  // Salvar enfermeiro no banco de dados
  Enfermeiro.create(enfermeiro)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro durante a criação do enfermeiro.",
      });
    });
};

// Retorna todos os enfermeiros do banco de dados. Podemos passar um parâmetro e filtrar
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;

  Enfermeiro.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro durante a procura pelo enfermeiro.",
      });
    });
};

// Encontra um enfermeiro pelo id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Enfermeiro.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não é possível achar o enfermeiro com o id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro na busca pelo enfermeiro via id=" + id,
      });
    });
};

// Atualiza os dados do enfermeiro
exports.update = (req, res) => {
  const id = req.params.id;

  Enfermeiro.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Enfermeiro foi atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Não foi possível atualizar o enfermeiro com id=${id}. Talvez o enfermeiro não tenha sido encontrada ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro em atualizar o enfermeiro via id=" + id,
      });
    });
};

// Deleta um enfermeiro pelo id
exports.delete = (req, res) => {
  const id = req.params.id;

  Enfermeiro.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Enfermeiro foi deletada com sucesso!",
        });
      } else {
        res.send({
          message: `Não é possível deletar esse enfermeiro; Ele não foi encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não é possível deletar o enfermeiro com id=" + id,
      });
    });
};

// Deleta todos os enfermeiros do banco de dados
exports.deleteAll = (req, res) => {
  Enfermeiro.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Enfermeiros foram deletadas com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro enquanto deletava os enfermeiros.",
      });
    });
};
