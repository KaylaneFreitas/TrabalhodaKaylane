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
  // Salvar doador no banco de dados
  Doador.create(doador)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro durante a criação do Doador.",
      });
    });
};

// Retorna todos os doadores do banco de dados. Podemos passar um parâmetro e filtrar
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;

  Doador.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro durante a procura pelo doador.",
      });
    });
};

// Encontra um doador pelo id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Doador.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não é possível achar o doador com o id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro na busca pelo doador via id=" + id,
      });
    });
};

// Atualiza os dados do doador
exports.update = (req, res) => {
  const id = req.params.id;

  Doador.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Doador foi atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Não foi possível atualizar o doador com id=${id}. Talvez o doador não tenha sido encontrada ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro em atualizar o doador via id=" + id,
      });
    });
};

// Deleta um doador pelo id
exports.delete = (req, res) => {
  const id = req.params.id;

  Doador.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Doador foi deletada com sucesso!",
        });
      } else {
        res.send({
          message: `Não é possível deletar esse doador; Ele não foi encontrada!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não é possível deletar o doador com id=" + id,
      });
    });
};

// Deleta todos os doadores do banco de dados
exports.deleteAll = (req, res) => {
  Doador.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Doadores foram deletadas com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro enquanto deletava os doadores.",
      });
    });
};
