const router = require('express').Router();
const { response } = require('express');
const { Project, Client, User } = require('../database/db');


const projectsGet = async(req, res = response) => {
    // res.send('----------------Listo');
    const projects = await Project.findAll({
        attributes: ['id','name','startDate','expirationDate','finishDate','status','contract'],
        include: [
            {
            model: Client,
            attributes: ['id','name','company']
            },
            {
                model: User,
                attributes: ['id','name']
            },
        ]
    });
    console.log("--------------")
    res.status(200).json(projects);
};

const projectsPost = async(req, res = response) => {
    const project = await Project.create(req.body);
    res.json(project);
};

const projectsPut = async (req, res = response) => {
    console.log(req.params.id);
    await Project.update (req.body, {
        where: {
            id: req.params.id
        }
    });
    res.json({success: 'Registro actualizado'});
};

const projectsDelete = async (req, res = response) => {
    console.log(req.params.id);
    await Project.destroy ({
        where: {
            id: req.params.id
        }
    });
    res.json({success: 'Registro borrado'});
};

module.exports = {
    projectsGet,
    projectsPost,
    projectsPut,
    projectsDelete
};    