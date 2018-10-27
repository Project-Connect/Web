const Projects = require('../models').projects;
const Associations = require('../models').user_associations;

module.exports = {
  //create a new Porjects
  create(req, res) {
    return Projects
      .create({
        name: req.body.name,
        description: req.body.description,
        github: req.body.github,
        url: req.body.url
      })
      .then(project => {
        if (!project) {
          return res.status(500).send({
            message: 'Eerror Creating Project ',
          });
        }
        return Associations.create({
          user_id: req.body.user_id,
          project_id: project.id,
          is_admin: true
        })
        .then((association) => res.status(200).send(project))
        .catch((error) => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },

  // list all Porjects
  list(req, res) {
    return Projects
      .findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((projects) => res.status(200).send(projects))
      .catch((error) => res.status(400).send(error));
  },


};
