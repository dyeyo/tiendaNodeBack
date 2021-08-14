export default (sequelize, { STRING }) => {
  const Users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: STRING,
      lastname: STRING,
      emal: STRING,
      password: STRING,
    },
    {
      tableName: 'users',
    },
  );

  Users.associate = (models) => {
    Users.belongTo(models.Roles, {
      foreignKey: {
        name: 'role_id',
        field: 'role_id',
      }
    });
  }

  return Users;
}