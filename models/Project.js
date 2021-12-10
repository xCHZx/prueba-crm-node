module.exports = (sequelize, type) => {

    return sequelize.define('projects',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING
        },
        startDate: {
            type: type.DATE
        },
        expirationDate: {
            type: type.DATE
        },
        finishDate: {
            type: type.DATE
        },
        status: {
            type: type.STRING
        },
        contract: {
            type: type.STRING
        },
    },
    {   
        sequelize,
        paranoid: true,
    }
    )

}