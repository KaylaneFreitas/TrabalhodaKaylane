module.exports = (sequelize, Sequelize) => {
    const Doador = sequelize.define( "doador", {
    nome: { type: Sequelize.STRING },
    idade: { type: Sequelize.FLOAT },
    ocupacao: { type: Sequelize.STRING },
    tipoSanguineo: { type: Sequelize.STRING },
    historico: { type: Sequelize.STRING },
    cpf: { type: Sequelize.STRING },
    },
    { freezeTableName: true }
);
return Doador;
};
