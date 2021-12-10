const router = require('express').Router();
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
const {User} = require('../database/db');



// router.post('/register', async (req, res)=>{

//     // res.send ("a")
//     // req.body.password = bcrypt.hashSync(req.body.password, 10);

//     const user = await User.create(req.body);
//     res.json(user);


// });

const usersGet = async (req, res = response) => {
    // res.send('----------------Listo');
    const users = await User.findAll();
    res.status(200).json(users);
};

const usersRegisterPost = ([
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Formato de email incorrecto').isEmail(),
    check('password', 'La contraseña debe tener mínimo 6 caracteres').isLength(6),
],
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errores: errors.array()})
    }


    req.body.password = bcrypt.hashSync(req.body.password, 10);

    const user = await User.create(req.body);

    // if(!err.isEmpty()){
    //     return res.status(422).send("aaaaaaaaaaaaa");
    // }

    res.json(user);
});


const usersLoginPost = async (req, res) =>{
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if (user) {
        const samePassword = bcrypt.compareSync(req.body.password, user.password);
        if (samePassword) {
            res.json({success: createToken(user)})
        }else{
            res.json({error: 'Error en correo y/o contraseña'})
        }
    }else{
        res.json({error: 'Error en correo y/o contraseña'})
    }
};


const createToken = (user) =>{
    const payload = {
        id: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(30,'minutes').unix()
    }
    return jwt.encode(payload, 'secretPhrase');
}


module.exports = {
    usersGet,
    usersRegisterPost,
    usersLoginPost
};    