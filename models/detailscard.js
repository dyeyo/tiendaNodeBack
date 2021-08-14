module.exports = (sequelize, DataTypes) => {
  const DetailsCard = sequelize.define(
    'DetailsCard',
    {
      priceUnit: DataTypes.INTTEGER,
      quantity: DataTypes.INTTEGER,
    },
    {}
  );
  DetailsCard.associate = (models) => {
    DetailsCard.belongsTo(models.ShopingCard, {
      name: 'id',
      field: 'id',
    });
  }
  return DetailsCard;
};
