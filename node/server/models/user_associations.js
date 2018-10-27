'use strict';
const Porjects = require('../models').porjects;
const Users = require('../models').users;

module.exports = (sequelize, DataTypes) => {
  const user_associations = sequelize.define('user_associations', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: Users,

        // This is the column name of the referenced model
        key: 'id',

        // This declares when to check the foreign key constraint. PostgreSQL only.
        deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        // This is a reference to another model
        model: Porjects,

        // This is the column name of the referenced model
        key: 'id',

        // This declares when to check the foreign key constraint. PostgreSQL only.
        deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
      }
    },
    is_admin: DataTypes.BOOLEAN,
  }, {});
  user_associations.associate = function(models) {
    // associations can be defined here
  };
  return user_associations;
};
