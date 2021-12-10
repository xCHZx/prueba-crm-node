module.exports = (sequelize, type) => {

    return sequelize.define('records',{
        id: {
            type: type.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: type.STRING
        },
        content: {
            type: type.STRING
        },
        date: {
            type: type.DATE
        },
    },
    {   
        sequelize,
        paranoid: true,
    }
    )

}