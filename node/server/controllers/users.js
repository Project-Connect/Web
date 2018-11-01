const Users = require('../models').users;

module.exports = {
  //create a new user
  create(req, res) {
    return Users
      .create({
        name: req.body.name,
        username: req.body.username,
        bio: req.body.bio,
        password: req.body.password,
        email: req.body.email,
        photo: req.body.photo,
        linked_in: req.body.linked_in,
        github: req.body.github
      })
      .then(users => res.status(200).send("okay"))
      .catch(error => res.status(400).send(error));
  },

  // list all users
  list(req, res) {
    return Users
      .findAll({
        attributes: ['id', 'username', 'name', 'bio'],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },

  // list all users
  getUser(req, res) {
    return Users
      .findById(req.params.user, {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },

  //update a user
  update(req, res) {
    return Users
      .findById(req.body.id, {
        attributes: {
          exclude: ['password', 'createdAt', 'updatedAt']
        },
      })
      .then(users => {
        if (!users) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return users
          .update({
            name: req.body.name,
            bio: req.body.bio,
            email: req.body.email,
            photo: req.body.photo,
            linked_in: req.body.linked_in,
            github: req.body.github
          })
          .then((users) => res.status(200).send(users))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  //remove a user
  removeUser(req, res) {
    return Users
      .findById(
        req.body.id
      )
      .then(user => {
        return user.destroy()
          .then(() => res.status(200).send("user deleted"))
          .catch((error) => res.status(400).send(error));
        })
      .catch(error => res.status(400).send(error));
  },

};
