'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetailsCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DetailsCard.init({
    priceUnit: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    card_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetailsCard',
  });
  return DetailsCard;
};