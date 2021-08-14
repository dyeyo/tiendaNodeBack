module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define(
    'products',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      priceTwo: DataTypes.INTEGER,
      images: DataTypes.JSON,
      state: DataTypes.INTEGER,
    },
    {}
  );
  Products.associate = (models) => {
    Products.belongsTo(models.Categories, {
      name: 'id',
      field: 'id',
    });
  }
  return Products;
};
