module.exports = (sequelize, type) => {

    return sequelize.define('users',{
        id: {
            type: type.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING
        },
        email: {
            type: type.STRING,
            unique: true
        },
        password: {
            type: type.STRING(150),
        }
    },
    {   
        sequelize,
        paranoid: true,
    }
    )

}