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
    project_start_date: DataTypes.DATE
  }, {});
  projects.associate = function(models) {
    // associations can be defined here
  };
  return projects;
};
