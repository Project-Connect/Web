const usersController = require('../controllers').users;
const projectsController = require('../controllers').projects;
const userAssociationsController = require('../controllers').user_associations;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Project Collab API!',
  }));

  // user routes
  app.post('/api/users', usersController.create);
  app.post('/api/user/update', usersController.update);
  app.get('/api/users', usersController.list);

  //project routes
  app.post('/api/projects', projectsController.create);
  app.get('/api/projects', projectsController.list);

  //user_associations routes
  app.post('/api/user_associations/add', userAssociationsController.create);
  app.get('/api/user_associations/:project', userAssociationsController.list);


};
