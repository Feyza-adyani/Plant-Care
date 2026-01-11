const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Plant = db.define("plants", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    needsWaterEvery: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    wateringTime: {
        type: DataTypes.STRING,
        allowNull: true
    },

    // tandai sudah disiram
    isWatered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Plant;
