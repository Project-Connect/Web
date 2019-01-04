const Users = require('../models').users;

module.exports = {
  //create a new user
  create(req, res) {
    return Users
      .create({
        name: req.body.username,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        type: req.params.type
      })
      .then(users =>  res.status(200).send("okay"))
      .catch(error => res.status(400).send(error));
  },

  //find user, if it doesn't exist, create user
  createOrFind(req, res) {
    return Users
      .findOrCreate({
        where: {
          username: req.body.username
        },
        defaults: {
          username: req.body.username,
          name: req.body.name,
          email: req.body.email,
          bio: req.body.bio,
          password: "Github",
          type: req.params.type
        },
        attributes: ['id', 'name', 'username', 'email', 'bio']
      })
      .then(users => {
        res.status(200).send("okay")
      })
      .catch(error => res.status(400).send(error));
  },

  // list all users
  token(req, res) {
    return Users
      .findAll({
        where: {
          id: req.body.user
        },
        attributes: ['id', 'username', 'name', 'bio', 'type'],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },

  // list all users
  login(req, res) {
    return Users
      .findOne({
        where: {
          username: req.body.username,
          password: req.body.password
        },
        attributes: ['id', 'username', 'name', 'bio', 'type'],
        order: [
          ['createdAt', 'DESC'],
        ],
      })
      .then((users) => {
        req.session.user = users.dataValues.id
        req.session.type = users.dataValues.type
        console.log(req.session.user, req.session.type)
        res.status(200).send(users);
      })
      .catch((error) => res.status(400).send(error));
  },

  // list all users
  logout(req, res) {
    req.session.destroy((error) => {
    		if (error) {
    			res.status(500).send(error)
    		} else {
    			res.send("success")
    		}
    })
  },

  // list all users
  list(req, res) {
    return Users
      .findAll({
        attributes: ['id', 'username', 'name', 'bio', 'type'],
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
      .findOne({
        where: {
          username: req.params.username
        },
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
            github: req.body.github,
            type: req.body.type,
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
