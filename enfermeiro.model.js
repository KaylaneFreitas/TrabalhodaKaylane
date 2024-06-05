module.exports = (sequelize, Sequelize) => {
    const Enfermeiro = sequelize.define( "enfermeiro", {
    nome: { type: Sequelize.STRING },
    idade: { type: Sequelize.FLOAT },
    tipoSanguineo: { type: Sequelize.STRING },
    formacao: { type: Sequelize.STRING },
    cargaHoraria: { type: Sequelize.FLOAT },
    cpf: { type: Sequelize.STRING },
    },
    { freezeTableName: true }
);
return Enfermeiro;
};