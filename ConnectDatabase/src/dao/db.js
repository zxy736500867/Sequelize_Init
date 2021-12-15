const Sequelize = require('sequelize');

const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/dbconfig').database;

const db = new Sequelize(dbName,user,password,{
    dialect:'mysql',
    host,
    port,
    logging:true,
    timezone:'+08:00',
    define:{
        // timestamp:false,   //取消创建时间和修改时间

        createdAt:'created_at',
        updatedAt:'updated_at',
        deletedAt:'deleted_at',
        underscored:true

    }
});

db.sync()

module.exports={
    db
}