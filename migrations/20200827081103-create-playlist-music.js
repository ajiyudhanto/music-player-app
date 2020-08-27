'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PlaylistMusics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PlaylistId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Playlists',
          key: 'id'
        }
      },
      MusicId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Music',
          key: 'id'
        }  
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PlaylistMusics');
  }
};