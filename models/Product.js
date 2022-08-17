const { Model, DataTypes } = require('sequelize'); // only parts of sequelize library needed
const sequelize = require('../config/connection'); // import db connection from config.js

// init Product model (table) by extending off seq's Model class
class Product extends Model {}



// TODO:

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
