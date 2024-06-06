module.exports = (sequelize, Sequelize) => {
    const Registros = sequelize.define( "registros", {
    QuantidadeDoada: { type: Sequelize.FLOAT },
    Tipo: { type: Sequelize.STRING },
    Numero: { type: Sequelize.FLOAT },
    },
    { freezeTableName: true }
);
return Registros;
};
