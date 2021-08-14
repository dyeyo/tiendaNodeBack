module.exports = (sequelize, DataTypes) => {
  const ShopingCard = sequelize.define(
    'shopingCard',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      dateOrder: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      state: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: 'shopingCard',
    },
  );

  ShopingCard.associate = (models) => {
    ShopingCard.hasOne(models.Products, {
      foreignKey: {
        name: 'id',
        field: 'id',
      },
      as: 'Products',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }

  ShopingCard.associate = (models) => {
    ShopingCard.hasOne(models.Users, {
      foreignKey: {
        name: 'id',
        field: 'id',
      },
      as: 'Users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }

  return ShopingCard;
}