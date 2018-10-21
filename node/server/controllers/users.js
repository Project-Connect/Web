const Users = require('../models').users;

module.exports = {
  create(req, res) {
    return Users
      .create({
        name: req.body.name,
        bio: req.body.bio,
        password: req.body.password,
        email: req.body.email,
        photo: req.body.photo,
        linked_in: req.body.linked_in,
        github: req.body.github
      })
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
  },
};
