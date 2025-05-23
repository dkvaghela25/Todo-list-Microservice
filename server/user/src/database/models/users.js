'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    user_id: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_no: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};