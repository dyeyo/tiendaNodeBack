module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'categories',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'categories',
    },
  );

  Categories.associate = (models) => {
    Categories.hasOne(models.Products, {
      foreignKey: {
        name: 'id',
        field: 'id',
      },
      as: 'Products',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }

  return Categories;
}