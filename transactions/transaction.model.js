const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
    const attributes = {
        from: { type: DataTypes.STRING, allowNull: false },
        to: { type: DataTypes.STRING, allowNull: false },
        balance: { type: DataTypes.DOUBLE, allowNull: false },
        userFrom: { type: DataTypes.SMALLINT, allowNull: false},
        userTo: { type: DataTypes.SMALLINT, allowNull: false },
        currency: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: true }
    }

    const options = {
        timestamp: false
    }

    return sequelize.define('transaction', attributes, options);
}
