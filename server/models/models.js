const sequelize = require('../db');
const {DataTypes} = require('sequelize');
const { model, modelManager } = require('../db');

const User = sequelize.define( 'users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fullName: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    date_regist: {type: DataTypes.DATE},
    last_login: {type: DataTypes.DATE},
    status: {type: DataTypes.STRING}
});

module.exports = {
    User
};