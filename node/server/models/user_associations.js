'use strict';

module.exports = (sequelize, DataTypes) => {
  const user_associations = sequelize.define('user_associations', {

    is_admin: DataTypes.BOOLEAN,
    status: {
      type: DataTypes.ENUM,
      values: ['approved', 'unapproved', 'rejected']
    },
  }, {});
  user_associations.associate = function(models) {
    user_associations.belongsTo(models.users, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE',
      allowNull: false,
    });
    user_associations.belongsTo(models.projects, {
      foreignKey: 'project_id',
      onDelete: 'CASCADE',
      allowNull: false,
    });
  };
  return user_associations;
};
