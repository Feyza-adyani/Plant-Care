const { DataTypes } = require("sequelize");
const db = require("../config/db");

const User = db.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePicture: DataTypes.STRING
});

module.exports = User;
