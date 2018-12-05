'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: DataTypes.STRING,
    photo: DataTypes.STRING,
    linked_in: DataTypes.STRING,
    github: DataTypes.STRING ,
    type: {
      type: DataTypes.ENUM,
      values: ['student', 'admin', 'company', 'instructor']
    }

  }, {});
  users.associate = function(models) {
    users.hasMany(models.user_associations, {
        foreignKey: 'user_id',
        as: 'user_associations',
    });
  };
  return users;
};
