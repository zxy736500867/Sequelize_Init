const {db} = require('../dao/db');

const {Sequelize,Model} = require('sequelize');

class User extends Model{

}


User.init({

    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
        },
    username:Sequelize.STRING,
    password:Sequelize.STRING,
    email:Sequelize.STRING
},{
    sequelize:db,
    tableName:'user'

})