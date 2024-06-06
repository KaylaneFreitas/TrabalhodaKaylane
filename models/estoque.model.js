module.exports = (sequelize, Sequelize) => {
    const Registros = sequelize.define( "registros", {
    QuantidadeDoada: { type: Sequelize.FLOAT },
    Tipo: { type: Sequelize.STRING },
    },
    { freezeTableName: true }
);
return Registros;
};
