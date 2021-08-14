export default (sequelize, { STRING, INTEGER }) => {
  const Roles = sequelize.define(
    'roles',
    {
      id: {
        type: INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'roles',
    },
  );

  Roles.associate = (models) => {
    Roles.hasOne(models.Users, {
      foreignKey: {
        name: 'id',
        field: 'id',
      },
      as: 'Users',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  }

  return Roles;
}