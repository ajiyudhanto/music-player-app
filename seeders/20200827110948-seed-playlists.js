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
      return queryInterface.bulkInsert('Playlists', [{
        name: 'Lagu Fiersa Besari',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 1
      }, {
        name: 'Lagu Galau',
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      }])
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      return queryInterface.bulkDelete('Playlists', null, {})
  }
};
