const Projects = require('../models').projects;
const Users = require('../models').users;
const Associations = require('../models').user_associations;
const Sequelize = require('sequelize');

const Op = Sequelize.Op;

module.exports = {
  //create a new association aka add a person to a group
  create(req, res) {
    return Associations
      .create({
        user_id: req.body.user_id,
        project_id: req.body.project_id,
        is_admin: req.body.is_admin,
      })
      .then(association => res.status(200).send(association))
      .catch((error) => res.status(400).send(error));
  },

  // list all users in a project
  listUsers(req, res) {
    return Associations
      .findAll({
        where: {
          project_id: req.params.project,
        },
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: Users,
          as: 'user',
          attributes: {exclude: ['password', 'createdAt', 'updatedAt'] },
        }],
        attributes: {exclude: ['createdAt', 'updatedAt', 'project_id'] }
      })
      .then((associations) => res.status(200).send(associations))
      .catch((error) => res.status(400).send(error));
  },

  // list all projects a user is in
  listProjects(req, res) {
    return Associations
      .findAll({
        where: {
          user_id: req.params.user,
        },
        order: [
          ['createdAt', 'DESC'],
        ],
        include: [{
          model: Projects,
          as: 'project',
          attributes: {exclude: ['password', 'createdAt', 'updatedAt'] },
        }],
        attributes: {exclude: ['createdAt', 'updatedAt', 'user_id'] }
      })
      .then((associations) => res.status(200).send(associations));
  },

  listNotInProjects(req, res) {
    return Associations
      .findAll({
        where: {
          user_id: req.params.user,
        },
        order: [
          ['createdAt', 'DESC'],
        ],
        attributes: {exclude: ['createdAt', 'updatedAt', 'user_id'] }
      })
      .then((associations) => {
        let my_projects = []
        for(association of associations){
           my_projects.push(association.project_id);
        }
        return Projects.findAll({
          where: {
            id: {
              [Op.notIn]: my_projects
            }
          }
        })
        .then((porject) => res.status(200).send(porject));
      });
  },


};
