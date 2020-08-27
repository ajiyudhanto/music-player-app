'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Music extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Music.belongsToMany(models.Playlist, {through: models.PlaylistMusic});
    }
  };
  Music.init({
    judul: DataTypes.STRING,
    penyanyi: DataTypes.STRING,
    pencipta: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Music',
  });
  return Music;
};