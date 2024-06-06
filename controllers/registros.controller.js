const db = require("../models");
const registros = db.registros;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validar requisição. Aqui verificamos se algum parâmetro está vazio
    if (!req.body.nome) {
    res.status(400).send({
    message: "Conteúdo não pode estar vazio!" ,
    });
    return;
    }
    // Criar um registro
    const registros = {
    QuantidadeDoada: req.body.QuantidadeDoada,
    Tipo: req.body.Tipo,
    Numero: req.body.Numero,
    doadorId: req.body.doadorId,
    enfermeiroId: req.body.enfermeiroId,
    };
}
  // Salvar registro no banco de dados
  Registros.create(registros)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro durante a criação do registro.",
      });
    });
};

// Retorna todos os registros do banco de dados. Podemos passar um parâmetro e filtrar
exports.findAll = (req, res) => {
  const Numero = req.query.Numero;
  var condition = Numero ? { Numero: { [Op.iLike]: `%${Numero}%` } } : null;

  Registros.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro durante a procura pelo registro.",
      });
    });
};

// Encontra um registro pelo Numero
exports.findOne = (req, res) => {
  const Numero = req.params.Numero;

  Registros.findByPk(Numero)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Não é possível achar o registro com o Numero=${Numero}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro na busca pelo registro via Numero=" + Numero,
      });
    });
};

// Atualiza os dados do registro
exports.update = (req, res) => {
  const Numero = req.params.Numero;

  Registro.update(req.body, {
    where: { Numero: Numero },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Registro foi atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Não foi possível atualizar o registro com numero=${Numero}. Talvez o registro não tenha sido encontrada ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro em atualizar o registro via numero=" + Numero,
      });
    });
};

// Deleta um registro pelo numero
exports.delete = (req, res) => {
  const Numero = req.params.Numero;

  Registros.destroy({
    where: { Numero: Numero },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Registro foi deletado com sucesso!",
        });
      } else {
        res.send({
          message: `Não é possível deletar esse registro; Ele não foi encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não é possível deletar o registro com Numero=" + Numero,
      });
    });
};

// Deleta todos os registros do banco de dados
exports.deleteAll = (req, res) => {
  Registros.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Registros foram deletados com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Erro enquanto deletava os registros.",
      });
    });
};
