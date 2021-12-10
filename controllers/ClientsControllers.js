const router = require('express').Router();
const { response } = require('express');
const {Client} = require('../database/db');


const clientsGet = async(req, res = response) => {
    // res.send('----------------Listo');
    const clients = await Client.findAll().then()
    res.status(200).json(clients);
};

const clientsPost = async(req, res = response) => {     
    console.log(req.body)  
    const client = await Client.create(req.body);
    res.json(req.body);
};

const clientsPut = async (req, res = response) => {
    console.log(req.params.id);
    console.log(req.body)   
    //  
    await Client.update (req.body, {
        where: {
            id: req.params.id
        }
        
    });
    res.send("Updated");
    
};

const clientsDelete = async (req, res = response) => {
    console.log(req.params.id);
    await Client.destroy ({
        where: {
            id: req.params.id
        }
    });
    res.json({success: 'Registro borrado'});
};

module.exports = {
    clientsGet,
    clientsPost,
    clientsPut,
    clientsDelete
};    