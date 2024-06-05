module.exports = (sequelize, Sequelize) => {
    const Registros = sequelize.define( "registro", {
    QuantidadeDoada: { type: Sequelize.FLOAT },
    Tipo: { type: Sequelize.STRING },
    },
    { freezeTableName: true }
);
return Registros;
};
