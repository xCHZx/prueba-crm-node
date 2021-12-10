module.exports = (sequelize, type) => {

    return sequelize.define('transactions',{
        id: {
            type: type.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: type.STRING
        },
        category: {
            type: type.STRING
        },
        name: {
            type: type.STRING
        },
        description: {
            type: type.STRING
        },
        ammount: {
            type: type.INTEGER
        },
    },
    {   
        sequelize,
        paranoid: true,
    }
    )

}