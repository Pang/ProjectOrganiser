const Sequelize = require('sequelize');
const db = require ('../config/database');

const User = Sequelize.define('project', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 20]
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [0, 100]
        }
    },
    projectJson: {
        type: Sequelize.STRING,
        allowNull: false
    },
});