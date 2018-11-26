'use strict';
module.exports = (sequelize, DataTypes) => {
  const projects = sequelize.define('projects', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: DataTypes.STRING,
    github: DataTypes.STRING,
    url: DataTypes.STRING,
    project_start_date: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: ['approved', 'unapproved', 'rejected']
    },
  }, {});
  projects.associate = function(models) {
    projects.hasMany(models.user_associations, {
        foreignKey: 'project_id',
        as: 'user_associations',
    });
  };
  return projects;
};
