const router = require('express').Router();
// const Client = require('../../database/db');
const { clientsGet,
        clientsPost,
        clientsPut,
        clientsDelete } = require('../../controllers/ClientsControllers');




router.get('/', clientsGet );

router.post('/', clientsPost );

router.put('/:id', clientsPut);

router.delete('/:id', clientsDelete);
   

module.exports = router;    