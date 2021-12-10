const Sequelize = require('sequelize');


const ClientModel = require('./models/Client');

const sequelize = new Sequelize('crudnode','root','',{
    host: "localhost",
    dialect: "mysql"
});


const Client = ClientModel(sequelize, Sequelize);

sequelize.sync({ force:false })
    .then(()=>{
        console.log("Tablas sincronizadas")
    })

module.exports = Client;