const Sequelize = require('sequelize');
const db = require ('../config/database');

const User = Sequelize.define('member', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    projectId: {
        type: Sequelize.INTEGER,
        references: 'project',
        referencesKey: 'id'
    },
    userId: {
        type: Sequelize.INTEGER,
        references: 'user',
        referencesKey: 'id'
    },
    permissionId: {
        type: Sequelize.INTEGER,
        references: 'permission',
        referencesKey: 'id'
    }
});