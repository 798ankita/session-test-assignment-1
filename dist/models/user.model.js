"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER(11),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        email_address: {
            type: DataTypes.STRING(255),
        },
        name: {
            type: DataTypes.STRING(255),
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
    return users;
};
exports.default = users;
