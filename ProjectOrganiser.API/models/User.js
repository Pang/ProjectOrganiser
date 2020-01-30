const sequelize = require('sequelize');
const db = require ('../config/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [3, 14]
    }
  },
  passwordHash: {
    type: Sequelize.STRING,
    allowNull: false
  },
  passwordSalt: {
    type: Sequelize.STRING,
    allowNull: false
  }
});