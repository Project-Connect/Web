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
        url: req.body.url,
        status: 'unapproved'
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
          is_admin: true,
          status: 'approved'
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
        attributes: {exclude: ['createdAt', 'updatedAt'] }
      })
      .then((projects) => res.status(200).send(projects))
      .catch((error) => res.status(400).send(error));
  },

  // list all Porjects that are approved or that are unapproved
  listApprovedOrUnapproved(req, res) {
    return Projects
      .findAll({
        attributes: {exclude: ['createdAt', 'updatedAt'] },
        where: {
          status: req.params.status
        }
      })
      .then((projects) => res.status(200).send(projects))
      .catch((error) => res.status(400).send(error));
  },

  // get a single porject
  getProject(req, res) {
    return Projects
      .findById( req.params.project, {
        attributes: {exclude: ['createdAt', 'updatedAt'] }
      })
      .then((projects) => res.status(200).send(projects))
      .catch((error) => res.status(400).send(error));
  },

  // remove a project
  removeProject(req, res) {
    return Projects
      .findById(
        req.body.id
      )
      .then(project => {
        return project.destroy()
          .then(() => res.status(200).send("project deleted"))
          .catch((error) => res.status(400).send(error));
        })
      .catch(error => res.status(400).send(error));
  },

  //update a project
  update(req, res) {
    return Projects
      .findById( req.params.project, {
        attributes: {exclude: ['createdAt', 'updatedAt'] }
      })
      .then(project => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Not Found',
          });
        }
        return project
          .update({
            name: req.body.name,
            description: req.body.description,
            github: req.body.github,
            url: req.body.url,
            status: req.body.status
          })
          .then((project) => res.status(200).send(project))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  // approve a project
  updateStatus(req, res) {
    return Projects
      .findById( req.params.project, {
        attributes: {exclude: ['createdAt', 'updatedAt'] }
      })
      .then(project => {
        if (!project) {
          return res.status(404).send({
            message: 'Project Not Found',
          });
        }
        return project
          .update({
            status: req.params.status,
          })
          .then((project) => res.status(200).send(project))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },


};
