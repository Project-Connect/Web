const Projects = require('../models').projects;
const Associations = require('../models').user_associations;

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
  list(req, res) {
    return Associations
      .findAll({
        where: {
          project_id: req.params.project,
        },
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((associations) => res.status(200).send(associations))
      .catch((error) => res.status(400).send(error));
  },


};
