'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Playlist.belongsTo(models.User);
      Playlist.belongsToMany(models.Music, {through: models.PlaylistMusic});
    }
  };
  Playlist.init({
    name: {
      type:DataTypes.STRING,
      notEmpty: {
        msg: 'nama playlist tidak boleh kosong'
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};