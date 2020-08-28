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
      User.hasMany(models.Playlist);
    }
  };
  User.init({
    name: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'nama tidak boleh kosong'
        }
      } 
    },
    username: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'username tidak boleh kosong'
        }
      }
    },
    email: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'email tidak boleh kosong'
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'password tidak boleh kosong'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.name = user.name.split(' ')
        for (let i = 0; i < user.name.length; i++) {
          user.name[i] = user.name[i].split('')
        }
        for (let i = 0; i < user.name.length; i++) {
          user.name[i][0] = user.name[i][0].toUpperCase()
        }
        for (let i = 0; i < user.name.length; i++) {
          user.name[i] = user.name[i].join('')
        }
        user.name = user.name.join(' ')
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};