const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'wedding_guest.db'
    //logging: false // disable logging
});

const db = {
    sequelize,
    Sequelize,
    models: {},
  };

db.models.Guest = require('../models/guest') (sequelize);
db.models.Table = require('../models/table') (sequelize);

module.exports = db;