const Sequelize = require('sequelize');
const db = require ('../config/database');

const User = Sequelize.define('permission', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    permissionType: {
        type: Sequelize.STRING,
    },
    value: {
        type: Sequelize.INTEGER
    }

});