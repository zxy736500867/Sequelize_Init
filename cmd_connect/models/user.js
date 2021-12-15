'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasMany(models.achievement)
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    sex: DataTypes.STRING,
    age: DataTypes.INTEGER,
    dept: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName:true
  });
  return User;
};