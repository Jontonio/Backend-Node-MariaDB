const { Sequelize } = require('sequelize');

const db = new Sequelize('node', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    // logging: false
});

module.exports = db;