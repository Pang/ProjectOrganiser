const sequelize = require('sequelize');
const db = require ('../config/database');

const User = sequelize.define('user', {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull defaults to true
    },
    passwordHash: {
        type: Sequelize.STRING
        // allowNull defaults to true
    },
    passwordSalt: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
  }, {
    // options
  });