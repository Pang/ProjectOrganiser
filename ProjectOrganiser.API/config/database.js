const sequelize = require('sequelize');

module.exports = new sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });