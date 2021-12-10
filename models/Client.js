module.exports = (sequelize, type) => {

    return sequelize.define('clients',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING
        },
        company: {
            type: type.STRING
        },
        email: {
            type: type.STRING
        }
    },
    {   
        sequelize,
        paranoid: true,
    }
    )

}