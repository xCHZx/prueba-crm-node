const router = require('express').Router();
const { usersGet,
        usersRegisterPost,
        usersLoginPost } = require('../../controllers/UsersController');


router.get('/', usersGet );

router.post('/', usersRegisterPost );

router.post('/', usersLoginPost );

module.exports = router;    