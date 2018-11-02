const usersController = require('../controllers').users;
const projectsController = require('../controllers').projects;
const userAssociationsController = require('../controllers').user_associations;

module.exports = (app) => {
  app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
  });
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Project Collab API!',
  }));

  // * user routes *
  // create new users
  app.post('/api/users', usersController.create);
  // update a single usesr
  app.post('/api/user/update', usersController.update);
  // get all users
  app.get('/api/users', usersController.list);
  // get a single user info TODO
  app.get('/api/users/:user', usersController.getUser);
  // remove a single user TODO
  app.post('/api/user/remove', usersController.removeUser);
  // * sign-up routes *
  app.post('/api/user/createFind', usersController.createOrFind);
  // * login routes *


  // * project routes *
  // creates and new project and
  // also a user association for the user creating the new project
  app.post('/api/project', projectsController.create);
  // update a project TODO

  // remove a porject
  app.post('/api/project/remove', projectsController.removeProject);
  // gets all projects
  app.get('/api/projects', projectsController.list);
  // get a single project
  app.get('/api/project/:project', projectsController.getProject);





  // * user_associations routes *
  // add a new user to a poject
  app.post('/api/user_associations/add', userAssociationsController.create);
  // get all users associations for a project (equal to getting all users for a project)
  app.get('/api/user_associations/project/:project', userAssociationsController.listUsers);
  //get all all users associations for a User (equal to getting all porjects for a User)
  app.get('/api/user_associations/user/:user', userAssociationsController.listProjects);

  // remove a users association user TODO



};
