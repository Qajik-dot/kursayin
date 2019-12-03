const Sequelize =require('sequelize')
const UserModel={
    firstName:{
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        unique: false,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    password:{
        type: Sequelize.STRING,
        unique:false,
        allowNull:false,

    }
};
module.exports=(Sequelize)=> {
    return  Sequelize.define('Users', UserModel)
};