const usersController = require('../controllers').users;
const projectsController = require('../controllers').projects;
const userAssociationsController = require('../controllers').user_associations;
const upload = require('../controllers').upload;
const Users = require('../models').users;

// Authentication for user resource routes
const authenticate = (req, res, next) => {
	if (req.session.user) {
    req.body.user = req.session.user
    next()
	} else {
		res.status(401).send()
	}
}

// Authentication for user resource routes
const adminAuthenticate = (req, res, next) => {
	if (req.session.user && req.session.type == "admin") {
    req.body.user = req.session.user
    next()
	} else {
		res.status(401).send()
	}
}


module.exports = (app) => {
  app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    res.header('Access-Control-Allow-Credentials',' true');
    next();
  });
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Project Collab API!',
  }));

  // * user routes *
  // create new users
  app.post('/api/users/:type', usersController.create);
  // update a single usesr
	// for requiring authentication
	// app.post('/api/user/update', authenticate, usersController.update);
  app.post('/api/user/update', authenticate, usersController.update);
  // get all users
  app.get('/api/users', usersController.list);
  // get a single user info TODO
  app.get('/api/users/:username', authenticate, usersController.getUser);
  // remove a single user TODO
  app.post('/api/user/remove', usersController.removeUser);
  // * sign-up routes *
  app.post('/api/user/createorfind/:type', usersController.createOrFind);
  // * login routes *
  app.post('/api/user/login', usersController.login);
  // * login routes *
  app.get('/api/user/token/', authenticate, usersController.token);
  // logout routes
  app.get('/api/user/logout', usersController.logout);

  // * project routes *
  // creates and new project and
  // also a user association for the user creating the new project
  app.post('/api/project', projectsController.create);
  // update a project
  app.post('/api/project/:project/update', projectsController.update);
  // remove a porject
  app.post('/api/project/remove', projectsController.removeProject);
  // gets all projects
  app.get('/api/projects', projectsController.list);
  // get all projects
  app.get('/api/projects/:status', projectsController.listApprovedOrUnapproved)
  // get a single project
  app.get('/api/project/:project', projectsController.getProject);
  // update the status of a project via instructor
  app.post('/api/project/:project/:status', projectsController.updateStatus)






  // * user_associations routes *
  // add a new user to a poject
  app.post('/api/user_associations/add', userAssociationsController.create);
  // get all users associations for a project (equal to getting all users for a project)
  app.get('/api/user_associations/project/:project', userAssociationsController.listUsers);
  //get all users associations for a User (equal to getting all porjects for a User)
  app.get('/api/user_associations/user', authenticate, userAssociationsController.listProjects);
  // get your status on a project
  app.get('/api/user_associations/user/project/:project', authenticate, userAssociationsController.yourProjectStatus);
  // get all users associations a user is not aprt (equal to getting all porjects a user is not apart of)
  app.get('/api/user_associations/user/not', authenticate, userAssociationsController.listNotInProjects);

  // remove a users association user TODO

  // update the status depending on admin give approved/rejected
  app.post('/api/user_associations/update/:status', userAssociationsController.updateStatus);
  // update the status depending on instr give approved/rejected
  app.post('/api/user_associations/instr/update/:status', userAssociationsController.instructorUpdateStatus);
  // list users associations for a project with a specificed updateStatus
  app.get('/api/user_associations/project/:project/:status', userAssociationsController.listSpecificUsers);

  // handling resume upload
  //Borrowed from https://github.com/richardgirges/express-fileupload/tree/master/example
  app.post('/upload', upload.handleFileUpload);

  app.post('/api/resume', upload.handleFileRequest);

};
