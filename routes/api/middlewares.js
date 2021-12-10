const jwt = require('jwt-simple');
const moment = require('moment');

const checkToken = (req, res, next) =>{

    if (!req.headers['user-token']){
        return res.json({error: 'Token necesario'});
    }
    const userToken = req.headers['user-token'];

    try{
        payload = jwt.decode(userToken, 'secretPhrase');
    }catch(err){
        return res.json({error: "Token incorrecto"});
    }

    if (payload.expiredAt < moment().unix()) {
        return res.json({error: "Token expirado"});
    }
    
    req.id = payload.id;

    next();
}

module.exports = {
    checkToken: checkToken
};