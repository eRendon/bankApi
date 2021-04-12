const { DataTypes } =  require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributes = {
        accountNumber: { type: DataTypes.STRING, allowNull: false },
        alias: { type: DataTypes.STRING, allowNull: false},
        description: { type: DataTypes.STRING, allowNull: false},
        balance: { type: DataTypes.DOUBLE, allowNull: true, defaultValue: 0},
        type: { type: DataTypes.DOUBLE, allowNull: false }
    };

    const options = {
        timestamp: false
    };

    return sequelize.define('bankAccount', attributes, options)
}
