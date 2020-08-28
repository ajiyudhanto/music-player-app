'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlaylistMusic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PlaylistMusic.init({
    PlaylistId: DataTypes.INTEGER,
    MusicId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlaylistMusic',
  });
  return PlaylistMusic;
};