const {Sequelize} = require('sequelize');

const ClientModel = require('../models/Client');
const UserModel = require('../models/User');
const ProjectModel = require('../models/Project');
const EmployeeModel = require('../models/Employee');
const TransactionModel = require('../models/Transaction');
const RecordModel = require('../models/Record');


const sequelize = new Sequelize('crudnode','root','',{
    host: "localhost",
    dialect: "mysql"
});


const Client = ClientModel(sequelize, Sequelize);
const User = UserModel(sequelize, Sequelize);
const Project = ProjectModel(sequelize, Sequelize);
const Employee = EmployeeModel(sequelize, Sequelize);
const Transaction = TransactionModel(sequelize, Sequelize);
const Record = RecordModel(sequelize, Sequelize);


//Relations
Client.hasMany(Project);
Project.belongsTo(Client);
//--------
User.hasMany(Project);
Project.belongsTo(User)
//--------
Employee.belongsToMany(Project, { through: 'Employees-Projects' });
Project.belongsToMany(Employee, { through: 'Employees-Projects' })
//--------
User.hasMany(Record);
Record.belongsTo(User);


sequelize.sync({ force:false })
    .then(()=>{
        console.log("Tablas sincronizadas")
    })

module.exports = {
    sequelize,
    Client,
    User,
    Project,
    Employee,
    Transaction,
    Record
};