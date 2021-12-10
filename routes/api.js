const router = require('express').Router();
const middlewares = require('./api/middlewares');
const apiClientsRouter = require('./api/clients');
const apiUsersRouter = require('./api/users');
const apiProjectsRouter = require('./api/projects');


// router.use('/clients', middlewares.checkToken, apiClientsRouter);
router.use('/clients', apiClientsRouter);
router.use('/users', apiUsersRouter);
router.use('/projects', apiProjectsRouter);

module.exports = router;