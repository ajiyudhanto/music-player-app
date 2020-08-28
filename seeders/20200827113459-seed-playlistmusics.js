'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      return queryInterface.bulkInsert('PlaylistMusics', [{
        PlaylistId: 1,
        MusicId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        PlaylistId: 1,
        MusicId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        PlaylistId: 1,
        MusicId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        PlaylistId: 2,
        MusicId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        PlaylistId: 2,
        MusicId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        PlaylistId: 2,
        MusicId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return queryInterface.bulkDelete('PlaylistMusics', null, {})
  }
};
