const router = require('express').Router();
// const project = require('../../database/db');
const { projectsGet,
        projectsPost,
        projectsPut,
        projectsDelete } = require('../../controllers/ProjectsController');




router.get('/', projectsGet );

router.post('/', projectsPost );

router.put('/:id', projectsPut);

router.delete('/:id', projectsDelete);
   

module.exports = router;    