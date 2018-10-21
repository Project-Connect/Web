'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
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

  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
